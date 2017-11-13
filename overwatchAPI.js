for (var i = 1; i < 25; i++) {

var url = "https://overwatch-api.net/api/v1/hero/" + i;
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
}
