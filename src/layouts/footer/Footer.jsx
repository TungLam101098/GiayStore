import React from 'react';
import './Footer.scss';
import img from '../../assets/img/baner-footer.JPG';

function Footer(props) {
    return (
        <div class="footer">
            <div class="col">
                <h3 class="col-title">giới thiệu</h3>
                <div class="main-footer">
                    <ul>
                        <li><i class="fa fa-home"></i>Đại Lộc - Quảng Nam</li>
                        <li><i class="fa fa-phone"></i>0367592479(Mrs Thanh)</li>
                    </ul>
                </div>
            </div>
            <div class="col">
                <h3 class="col-title">hỗ trợ khách hàng</h3>
                <div class="main-footer">
                    <ul>
                        <li><a href="">Hướng dẫn chọn size</a></li>
                        <li><a href="">Hướng dẫn mua hàng</a></li>
                        <li><a href="">Hình thức thanh toán</a></li>
                        <li><a href="">Chính sách bảo hành</a></li>
                        <li><a href="">Chính sách bảo mật thông tin</a></li>
                    </ul>
                </div>
            </div>
            <div class="col">
                <h3 class="col-title">giới thiệu</h3>
                <div class="main-footer">
                    <form class="form-input" action="">
                        <input type="text" placeholder="Nhập email của bạn" />
                        <a href=""><i class="fa fa-paper-plane"></i></a>
                    </form>
                    <p>Hãy nhập email của bạn vào đây để nhận tin!</p>
                    <div class="footer-item">
                        <ul>
                            <li><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
                            <li><i class="fa fa-twitter-square" aria-hidden="true"></i></li>
                            <li><i class="fa fa-google-plus-official" aria-hidden="true"></i></li>
                            <li><i class="fa fa-youtube-square" aria-hidden="true"></i></li>
                            <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="col">
                <h3 class="col-title">kết nối với chúng tôi</h3>
                <div class="main-footer">
                    <a href=""><img src={img} alt="" /></a>
                </div>
            </div>

        </div>
    );
}

export default Footer;