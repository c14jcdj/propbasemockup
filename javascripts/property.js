$(document).ready(function() {
    // rotateBackground();
})

function Picture(image, text) {
    this.image = "img/" + image + "";
    this.textBig = text[0];
    this.textLittle = text[1];
}

function test() {
    console.log('hey')
}

function rotateBackground() {

    var images = [
        new Picture('commercialipadmini.jpg', ['Connect apps, and go mobile', 'Track deals in progress, sales, investors all with your mobile device']),
        new Picture('developergrass.jpg', ['Track your sales cycle from pre-sale to closing', 'Manage inventory, get a birds-eye view of your sales team']),
        new Picture('residential.jpg', ['Software for your real estate buisness', 'Track leads and referrals, market to your prospects'])
    ];
    var counter = 0;
    var breaker = 0;

    var rotator = function() {
        $('.pictures').css("background", "url(" + images[counter].image + ")")
        $('.pictures p:nth-child(1)').text(images[counter].textBig)
        $('.pictures p:nth-child(2)').text(images[counter].textLittle)
        counter = (counter == images.length - 1) ? 0 : counter + 1;
    };
    setInterval(rotator, 3000);

}