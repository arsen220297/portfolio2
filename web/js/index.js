$(document).ready(function(){$(".items-wrap").masonry({itemSelector:".item-wrap",percentPosition:!0,gutter:15}),$(".hero-wrap").on("click",".burger",function(){$(this).toggleClass("burger-close"),$(this).siblings(".hero-nav").toggleClass("open-burger")}),(new WOW).init(),$(".status-open").on("click",function(){$(this).toggleClass("status-close"),$(this).parent().siblings(".nav-submenu").toggleClass("nav-submenu-mobile"),$(this).parent().parent().toggleClass("nav-list-item-mobile")})});