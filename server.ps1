# Servidor HTTP estático simple para Consejos del Chef
$root = "C:\Users\lponce\proyectos\consejos-del-chef"
$port = 8080
$url  = "http://localhost:$port/"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)
$listener.Start()
Write-Host "Servidor corriendo en $url  (Ctrl+C para detener)"

$mimeTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript'
  '.json' = 'application/json'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.svg'  = 'image/svg+xml'
  '.ico'  = 'image/x-icon'
  '.woff2'= 'font/woff2'
  '.woff' = 'font/woff'
}

try {
  while ($listener.IsListening) {
    $ctx  = $listener.GetContext()
    $req  = $ctx.Request
    $resp = $ctx.Response

    $local = $req.Url.LocalPath
    if ($local -eq '/') { $local = '/index.html' }
    $file = Join-Path $root ($local.TrimStart('/').Replace('/', '\'))

    if (Test-Path $file -PathType Leaf) {
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $ext   = [System.IO.Path]::GetExtension($file).ToLower()
      $resp.ContentType      = if ($mimeTypes[$ext]) { $mimeTypes[$ext] } else { 'application/octet-stream' }
      $resp.ContentLength64  = $bytes.Length
      $resp.StatusCode       = 200
      $resp.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $resp.StatusCode = 404
      $body = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $local")
      $resp.ContentLength64 = $body.Length
      $resp.OutputStream.Write($body, 0, $body.Length)
    }
    $resp.Close()
    Write-Host "$($req.HttpMethod) $($req.Url.LocalPath) → $($resp.StatusCode)"
  }
} finally {
  $listener.Stop()
  Write-Host "Servidor detenido."
}
