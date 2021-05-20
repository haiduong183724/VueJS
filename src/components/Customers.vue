.
<template>
  <div class="main" id="employees">
    <div class="main-header">
      <a @click="add()">
        <span>
          <img src="../assets/icon/add.png" alt="" />
        </span>
        Thêm nhân viên
      </a>
      <a class="delete" @click="del()">
        <span>
          <img src="../assets/icon/add.png" alt="" />
        </span>
        Xóa
      </a>
      <a class="fix" @click="edit()">
        <span>
          <img src="../assets/icon/add.png" alt="" />
        </span>
        Sửa
      </a>
      <h2>Danh sách nhân viên</h2>
    </div>
    <div class="tool-bar">
      <form action="">
        <label for="" class="field">
          <span>
            <img src="../assets/icon/search.png" alt="a" />
          </span>
          <input
            type="text"
            placeholder="tìm kiếm nhân viên bằng mã nhân viên"
          />
        </label>
      </form>
      <a class="" @click="getData()">
        <span>
          <img src="../assets/icon/refresh.png" alt="" />
        </span>
      </a>
    </div>
    <div class="list-employee">
      <table>
        <thead>
          <td>Mã nhân viên</td>
          <td>Họ tên</td>
          <td>Giới tính</td>
          <td>Ngày sinh</td>
          <td>Điện thoại</td>
          <td>Email</td>
          <td>Chức vụ</td>
          <td>Phòng ban</td>
          <td>Mức lương cơ bản</td>
          <td>Tình trạng công việc</td>
        </thead>
        <tbody>
          <tr
            v-for="(nv, index) in employees"
            :key="nv.EmployeeCode"
            :class="{
              'gray-bg': index % 2,
              row: true,
              selectedRow: index == 0,
            }"
            @click="initSelectedRow(index)"
            :Index="index"
          >
            <td FieldName="EmployeeCode">{{ nv.EmployeeCode }}</td>
            <td FieldName="FullName">{{ nv.FullName }}</td>
            <td FieldName="Gender">{{ fomatGender(nv.Gender) }}</td>
            <td FieldName="DateOfBirth">{{ fomatDate(nv.DateOfBirth) }}</td>
            <td FieldName="PhoneNumber">{{ nv.PhoneNumber }}</td>
            <td FieldName="Email">{{ nv.Email }}</td>
            <td FieldName="PositionName">{{ nv.PositionName }}</td>
            <td FieldName="Department">{{ nv.Department }}</td>
            <td FieldName="Salary">{{ nv.Salary }}</td>
            <td FieldName="WorkStatus">{{ nv.WorkStatus }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import swal from "sweetalert";
import EventBus from "./../main";
export default {
  data() {
    return {
      employees: {},
    };
  },
  methods: {
    fomatDate(datesrc) {
      let date = new Date(datesrc),
        year = date.getFullYear().toString(),
        month = (date.getMonth() + 1).toString().padStart(2, "0"),
        day = date.getDate().toString().padStart(2, "0");
      return `${day}/${month}/${year}`;
    },
    fomatGender(gd) {
      switch (gd) {
        case 1:
          return "Nam";
        case 2:
          return "Undefined";
        case 0:
          return "Nữ";
      }
    },
    getData() {
      this.employees = null;
      swal("waiting", { timer: 2000 });
      axios.get("http://cukcuk.manhnv.net/v1/Employees").then((response) => {
        this.employees = response.data;
      });
    },
    initSelectedRow(index) {
      let item = document.getElementsByClassName("selectedRow");
      for (var i = 0; i < item.length; i++) {
        item[i].classList.remove("selectedRow");
      }
      document
        .getElementsByClassName("row")
        [index].classList.add("selectedRow");
    },
    add() {
      // let me = this,
      let param = {
        mode: "Add",
      };
      EventBus.$emit("send-data", param);
    },
    edit() {
      let me = this,
        index = document
          .getElementsByClassName("selectedRow")[0]
          .getAttribute("index"),
        info = me.employees[index];
      info.DateOfBirth = me.fomatDate(info.DateOfBirth);
      let param = {
        mode: "Edit",
        data: info,
      };
      EventBus.$emit("send-data", param);
    },
    del() {
      let index = document
          .getElementsByClassName("selectedRow")[0]
          .getAttribute("index"),
        info = this.employees[index];
      let url = "http://cukcuk.manhnv.net/v1/Employees/" + info.EmployeeId;
      axios
        .delete(url, info)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.getData();
    },
  },
  mounted() {
    axios.get("http://cukcuk.manhnv.net/v1/Employees").then((response) => {
      this.employees = response.data;
      swal("waiting", { timer: 2000 });
    });
    EventBus.$on("reset-tb", (msg) => {
      if (msg) this.getData();
    });
  },
};
</script>

<style>
.main {
  width: 100%;
  flex: 1;
  border: 1px solid;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
}
.main-header {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 50px;
}
.main-header h2 {
  margin: 10px;
  text-align: left;
  flex: 1;
}
.main-header a {
  margin: 5px;
  padding: 12px;
  border: 1px solid;
  background-color: green;
  display: flex;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.main-header .delete {
  background: rgb(187, 31, 31);
}
.main-header .fix {
  background: rgb(39, 140, 207);
}
span {
  margin-right: 10px;
}
.tool-bar {
  height: 50px;
  display: flex;
  margin: 10px;
}
.refresh {
  width: 30px;
  height: 100%;
  padding: 10px 0px;
}
.field {
  display: flex;
  padding: 10px 12px;
  border: 1px solid;
  position: relative;
  width: 300px;
  max-height: 100%;
  border-radius: 5px;
}
.tool-bar input[type="text"] {
  border: none;
  width: 100%;
  padding: 0;
  margin-left: 10px;
}
.list-employee {
  height: auto;
  max-height: 75%;
  border-bottom: 5px solid black;
}
a img {
  object-fit: contain;
}
thead td {
  border: none;
}
tr {
  border: none;
  border-top: 1px solid;
}
tr td {
  border: none;
  height: 40px;
}
tr:hover {
  background: rgb(165, 165, 165);
}
.gray-bg {
  background: rgb(181, 185, 185);
}
</style>
