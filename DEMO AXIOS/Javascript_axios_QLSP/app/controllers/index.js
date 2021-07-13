// Tạo global variable cho id
let idUpdate;

// Add product
document.querySelector("#addProduct").addEventListener("click", (e) => {
  e.preventDefault();
  // Lấy value của người dùng nhập vào
  const tenSp = document.querySelector("#TenSP").value;
  const giaSp = document.querySelector("#GiaSP").value;
  const hinhSp = document.querySelector("#HinhSP").value;
  const loaiSp = document.querySelector("#loaiSP").value;
  // debugger;
  // Validation - kiểm tra dữ liệu đầu vào

  if (!checkEmpty(tenSp, "errorTenSP", "Không được để trống tên sản phẩm")) {
    return;
  }

  const prod = new Product(tenSp, giaSp, hinhSp, loaiSp);
  // Tạo prod trên API
  creatAPIProduct(prod)
    .then((res) => {
      console.log(res);
      alert("Them san pham thanh cong");
      // Lấy lại và cập nhật product đã add
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
});

// Edit and Update Product
document.querySelector("#updateProduct").addEventListener("click", (e) => {
  e.preventDefault();
  const tenSp = document.querySelector("#TenSP").value;
  const giaSp = document.querySelector("#GiaSP").value;
  const hinhSp = document.querySelector("#HinhSP").value;
  const loaiSp = document.querySelector("#loaiSP").value;
  const prod = new Product(tenSp, giaSp, hinhSp, loaiSp);

  // Tách file để nếu AIP nào bị hư thì vào sửa AIP đó
  updateProduct(idUpdate, prod)
    .then((e) => {
      // Lấy lại và hiển thị data đã cập nhật
      fetchData();
    })
    .catch((e) => {
      console.log(e);
    });
});

const handleEdit = (id) => {
  idUpdate = id;
  console.log(id);
  getAPIValuetoUpdate(id)
    .then((res) => {
      console.log(res.data);
      // Lấy data và hiển thị lại trên form
      document.querySelector("#TenSP").value = res.data.name;
      document.querySelector("#GiaSP").value = res.data.price;
      document.querySelector("#HinhSP").value = res.data.image;
      document.querySelector("#loaiSP").value = res.data.type;
    })
    .catch((res) => console.log(res));
};
// Delete Product
const handleDelete = (id) => {
  console.log(id);
  deleAPIProduct(id)
    .then(function (res) {
      alert("Xoa thanh cong");
      // Lấy lại và cập nhật product đã xóa
      fetchData();
    })
    .catch(function (error) {
      console.log(error);
    });
};

// Render Product
const renderProductList = (list) => {
  let contentTbody = "";
  // Loop quá các item và add cấu trúc HTML
  list.map(function (item, index) {
    contentTbody += `
    <tr>
        <td>${index + 1}</td>   
        <td>${item.name}</td>   
        <td>${item.price}</td>   
        <td><img src="${item.image}" width="200px"></img></td>   
        <td>${item.description}</td>   
        <td>
            <button class="btn btn-danger" onClick="handleDelete(${
              item.id
            })"> Xóa </button>
            <button data-target="#myModal" data-toggle="modal" class="btn btn-success" onClick="handleEdit(${
              item.id
            })"> Sửa </button>
        </td>
    </tr>`;
  });
  document.getElementById("tblDanhSachSP").innerHTML = contentTbody;
  0;
};

// Lay data tu AIP
const fetchData = () => {
  getAllProduct()
    .then(function (res) {
      console.log(res);
      // Lấy product cũ
      const productList = res.data;
      // Render product ra màn hình
      renderProductList(productList);
    })
    .catch(function (error) {
      console.log(error);
    });
};

fetchData();
