// const path = require('path')
// const express = require('express')
// const fs = require('fs')
// const { renderToString } = require('@vue/server-renderer')
// const manifest = require('./dist/server/ssr-manifest.json')
//
// const server = express()
//
// const appPath = path.join(__dirname, './dist', 'server', manifest['app.js'])
// const createApp = require(appPath).default
//
// server.use('/img', express.static(path.join(__dirname, './dist/client', 'img')))
// server.use('/js', express.static(path.join(__dirname, './dist/client', 'js')))
// server.use('/css', express.static(path.join(__dirname, './dist/client', 'css')))
// server.use('/favicon.ico', express.static(path.join(__dirname, './dist/client', 'favicon.ico')))
//
// server.get('*', async (req, res) => {
//     const { app, router } = createApp()
//
//
//     await router.push(req.url)
//     await router.isReady()
//
//     const appContent = await renderToString(app)
//
//
//     fs.readFile(path.join(__dirname, '/dist/client/index.html'), (err, html) => {
//         if (err) {
//             throw err
//         }
//
//         html = html
//             .toString()
//             .replace('<div id="app">', `<div id="app">${appContent}`)
//         res.setHeader('Content-Type', 'text/html')
//         res.send(html)
//     })
// })
//
// console.log('Сервер запущен по адресу: http://localhost:8080')
//
// server.listen(8080)