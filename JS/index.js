$(document).ready(function () {
    var i = 1; // Khởi tạo số thứ tự
    // Viết code vào
    $("#btn2").click(function () {
        $("#myModal").modal();
    });
    function kiemTraTen() {
        var i = 1;
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số, không để khoảng trắng ở ký tự đầu");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);
    function kiemTraUserName() {
        var i = 1;
        let mauKT = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
        if ($("#Username").val() == "") {
            $("#tbUsername").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#Username").val())) {

            $("#tbUsername").html("không để khoảng trắng ở ký tự đầu ");
            return false;
        }
        $("#tbUsername").html("*");
        return true;
    }
    $("#Username").blur(kiemTraUserName);
    function kiemTraPassword() {
        var i = 1;
        let mauKT = /^[0-9+]{6}$/;
        if ($("#Password").val() == "") {
            $("#tbPassword").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#Password").val())) {

            $("#tbPassword").html("Mật khẩu là 6 số, không để khoảng trắng ở ký tự đầu");
            return false;

        }
        $("#tbPassword").html("*");
        return true;
    }
    $("#Password").blur(kiemTraPassword);
    function kiemTraNgaysinh() {
        if ($("#Ngaysinh").val() == "") {
            $("#tbNgaysinh").html("không để trống");
            return false;
        }
        var today = new Date();
        var ngaysinh = new Date($("#Ngaysinh").val());
        var namsinh = ngaysinh.getFullYear();
        var year = today.getFullYear();
        if (year - namsinh < 16) {
            $("#tbNgaysinh").html("Phải lớn hơn 16 tuổi");
            return false;
        }
        $("#tbNgaysinh").html("*");
        return true;
    }
    $("#Ngaysinh").blur(kiemTraNgaysinh);
    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 0XXX-XXX-XXX trong đó X là số, không để khoảng trắng ở ký tự đầu");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);
    $("#Save").click(function () {
        if (kiemTraTen() == true && kiemTraUserName() == true && kiemTraPassword() == true && kiemTraNgaysinh() == true && kiemTraSDT() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Username").val() + "</th>";
            row += "<th>" + $("#Password").val() + "</th>";
            row += "<th>" + $("#Ngaysinh").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})