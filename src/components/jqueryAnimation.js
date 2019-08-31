import $ from "jquery"

$(document).ready(function() {
  $("body").css("display", "none")

  $("body").fadeIn(2000)

  $("a.transition").click(function(event) {
    event.preventDefault()
    const linkLocation = this.href
    $("body").fadeOut(1000, redirectPage.bind(this, linkLocation))
  })

  function redirectPage(linkLocation) {
    window.location = linkLocation
  }
})
