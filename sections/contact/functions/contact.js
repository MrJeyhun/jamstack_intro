exports.handler = (event, _content, callback) => {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({boop: true})
    })
}