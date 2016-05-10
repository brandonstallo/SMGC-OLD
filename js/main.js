console.log('loaded');
//'use strict';
/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      // Home
      .when("/", { templateUrl: "partials/home.html", controller: "PageCtrl" })
      // Pages
      .when("/directions", { templateUrl: "partials/directions.html", controller: "PageCtrl" })
      .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

      .when("/about", { templateUrl: "partials/about.html", controller: "PageCtrl" })
      .when("/calendar", { templateUrl: "partials/calendar.html", controller: "PageCtrl" })
      .when("/pricing", { templateUrl: "partials/pricing.html", controller: "PageCtrl" })
      .when("/course", { templateUrl: "partials/course.html", controller: "PageCtrl" })
      .when("/contact", { templateUrl: "partials/contact.html", controller: "PageCtrl" })

      // else 404
      .otherwise("/404", { templateUrl: "partials/404.html", controller: "PageCtrl" });
}]);



/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    });

    var contentLayer = jQuery('#contentLayer'),
    container = jQuery('#container'),
    containerWidth = container.width();

    ////// CLOSE MENU //////
    function closeMenu() {

        container.css('width', "auto");

        contentLayer.css('display', 'none');
        //enable all scrolling on mobile devices when menu is closed

        container.unbind('touchmove');
        //set margin for the whole container back to original state with a jquery UI animation

        container.removeClass('is-hidden');

        jQuery('nav').removeClass('is-open');

        jQuery('.mobile-nav').removeClass('is-open');
    }

    ////// OPEN MENU //////
    function openMenu() {

        container.css('width', containerWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        contentLayer.css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        jQuery('#container').bind('touchmove', function (e) {
            e.preventDefault();
        });

        //set margin for the whole container with a jquery UI animation
        container.addClass('is-hidden');
        jQuery('nav').addClass('is-open');
        jQuery('.mobile-nav').addClass('is-open');

    }

    jQuery(document).ready(function () {

        jQuery(".mobile-menu").on('click', function () {
            console.log('clicked');
            var $this = jQuery(this);

            if ($this.hasClass('is-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        jQuery("#contentLayer").on('click', function () {
            closeMenu();
        });

        jQuery(window).resize(function () {
            closeMenu();

        });

        jQuery('.bxslider').bxSlider({
            auto: true,

        });

        jQuery('.footer-to-light').on('click', function (e) {  //selects the footer <a> tag with this class
            e.preventDefault(); //prevent default(screen will jump if not present)
            jQuery('body, html').animate({ //selects the body of the page and starts an animation
                scrollTop: jQuery(this.hash).offset().top  //selects the hashtag in href for the above selector and scrolls to the top location of this hastag's location on the page
            }, 500); //animation time
        });
    });
});









////OOP LEARNING
//var GolfCourse = function(name, par, tournament, date) {
//    this.name = name;
//    this.par = par;
//    this.tournament = tournament;
//    this.date = date;
//    this.information = function() {
//        console.log(this.name + ' hosts ' + this.tournament + ' on ' + this.date);
//    };
//};

//var hole = function() {


//};

//var Golfer = function(name) {
//    this.name = name;
//    this.club = 'putter';
//};

////Method
//Golfer.prototype.putts = function() {
//    console.log(this.name + " makes a putt with his " + this.club);
//};

////Method
//Golfer.prototype.changeName = function(name) {
//    this.name = name;
//};

//golfer1 = new Golfer("Jordan Spieth");
//golfer2 = new Golfer("Tiger Woods");


//golfer1.putts();
//golfer2.putts();

//golfer1.changeName('Phil Mickelson');

//golfer1.putts();


//augustaNational = new GolfCourse('Augusta National', 72, "The Masters", "April 7th - 10th");

//MarcelineGolfCourse = new GolfCourse("Marceline Golf Club", 70, "Mark Black Scramble", "July 30th - 31st");

//augustaNational.information();
//MarcelineGolfCourse.information();
