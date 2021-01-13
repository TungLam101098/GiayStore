import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";

function Header(props) {
  return (
    <section>
        <div class="header">
            <div class="logo">
                <a href="index.html">
                    <img src="http://theme.hstatic.net/1000271846/1000486586/14/logo.png?v=164" />
                </a>

            </div>
            <div class="header-right_mobile">
                    <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div class="header-right">
                <div class="header-right_menu">
                    <a href="register.html">Đăng ký</a>
                    <a href="login.html">Đăng nhập</a>
                    <a href="feedback.html">Feedback</a>
                </div>
                <p>Miễn phí vận chuyển ĐƠN HÀNG TRÊN 500K</p>
            </div>
            <div class="main-menu">
                <nav>
                    <ul>
                        <li><a href="">zoe</a></li>
                        <li><a href="">kith</a></li>
                        <li class="dropdown"><a href="">giày nữ <i class="fa fa-caret-down"></i></a>
                            <div class="dropdown-content">
                                <a href="#">Thể thao</a>
                                <a href="#">Cao gót</a>
                                <a href="#">Sandal</a>
                                <a href="#">Boot</a>
                                <a href="#">Dép</a>
                            </div>
                        </li>
                        <li><a href="">giày nam</a></li>
                        <li class="dropdown"><a href="">thời trang<i class="fa fa-caret-down"></i></a>
                            <div class="dropdown-content">
                                <a href="#">Áo thun</a>
                                <a href="#">Sơ mi</a>
                                <a href="#">Chân váy</a>
                                <a href="#">Quần</a>
                                <a href="#">Túi sách</a>
                            </div>
                        </li>
                        <li><a href="">sales</a></li>
                    </ul>
                </nav>
            </div>
            <div class="search">
                <div class="search-input">
                        <input id="search" type="text" placeholder="Tìm kiếm..."></input>
                </div>
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    </section>
  );
}

export default Header;
