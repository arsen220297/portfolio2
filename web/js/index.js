$(document).ready(function(){$(".items-wrap").masonry({itemSelector:".item-wrap",percentPosition:!0,gutter:35}),$(".hero-wrap").on("click",".burger",function(){$(this).toggleClass("burger-close"),$(this).siblings(".hero-nav").toggleClass("open-burger")}),(new WOW).init(),$(".nav-list-item-link").on("click",function(){$(this).find(".status-open").toggleClass("status-close"),$(this).siblings(".nav-submenu").toggleClass("nav-submenu-mobile"),$(this).parent().toggleClass("nav-list-item-mobile")})});