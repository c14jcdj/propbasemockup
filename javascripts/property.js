$(document).ready(function() {
    rotateBackground();
    $('.myMenu > li').bind('mouseover', openSubMenu);
    $('.myMenu > li').bind('mouseout', closeSubMenu);

    function openSubMenu() {
        $(this).find('ul').css('visibility', 'visible');
        if ($(this).find('ul').length = 1) {
            $('.dropdown').css('visibility', 'visible');
        }
    };

    function closeSubMenu() {
        $(this).find('ul').css('visibility', 'hidden');
        $('.dropdown').css('visibility', 'hidden');
    };

})

function test() {

}

function Picture(image, text, id) {
    this.image = "img/" + image + "";
    this.textBig = text[0];
    this.textLittle = text[1];
    this.id = id
}

function test() {
    console.log('hey')
}

function rotateBackground() {

    var images = [
        new Picture('commercialipadmini.jpg', ['Connect apps, and go mobile', 'Track deals in progress, sales, investors all with your mobile device'], '2'),
        new Picture('developergrass.jpg', ['Track your sales cycle from pre-sale to closing', 'Manage inventory, get a birds-eye view of your sales team'], '3'),
        new Picture('residential.jpg', ['Software for your real estate buisness', 'Track leads and referrals, market to your prospects'], '1')
    ];
    var counter = 0;
    var breaker = 0;

    function changeLinks() {
        var prevlink = (images[counter].id == "1") ? 3 : parseInt(images[counter].id) - 1;
        $('.pictures').css("background", "url(" + images[counter].image + ")");
        $("#" + prevlink + "").css('text-decoration', 'none');
        $("#" + images[counter].id + "").css('text-decoration', 'underline');
    };

    var rotator = function() {
        changeLinks();
        $('.pictures p:nth-child(1)').text(images[counter].textBig);
        $('.pictures p:nth-child(2)').text(images[counter].textLittle);
        counter = (counter == images.length - 1) ? 0 : counter + 1;
    };


    setInterval(rotator, 3000);
}