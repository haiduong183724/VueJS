<template>
  <div id="formEmployeeDetail" :class="{ formDetail: true, show: show }">
    <div class="wrap-form">
      <div class="form-content">
        <h1>Thông tin khách hàng</h1>
        <div class="head-form">
          <div class="div-avatar">
            <img
              class="img-avatar"
              src="../assets/img/default-avatar.jpg"
              alt="avatar"
            />
            <p>Vui lòng chọn ảnh có định dạng .jpg, .jpeg, .png, .gif</p>
          </div>
          <div class="right-form">
            <div class="d-flex">
              <div class="field-input">
                <label for="id"
                  >Mã khách hàng <span style="color: red">(*)</span></label
                >
                <br />
                <input
                  v-model="data.EmployeeCode"
                  class="small form-input"
                  type="text"
                  name="id"
                  required
                />
              </div>
              <div class="field-input">
                <label for="name"
                  >Họ và tên <span style="color: red">(*)</span></label
                >
                <br />
                <input
                  v-model="data.FullName"
                  class="small form-input"
                  type="text"
                  name="name"
                  required
                />
              </div>
            </div>
            <div class="d-flex">
              <div class="field-input">
                <label for="id-card">Mã thẻ nhân viên</label> <br />
                <input class="small form-input" type="text" />
              </div>
              <div class="field-input">
                <label class="small" for="list">Nhóm khách hàng</label> <br />
                <select class="small" name="" id="selector">
                  <option value="0">Nhóm khách hàng MISA</option>
                  <option value="1">Nhóm khách hàng 1</option>
                  <option value="2">Nhóm khách hàng 2</option>
                  <option value="3">Nhóm khách hàng 3</option>
                </select>
              </div>
            </div>
            <div class="d-flex">
              <div class="field-input">
                <label for="birthDay">Ngày sinh</label> <br />
                <input
                  v-model="data.DateOfBirth"
                  class="small form-input"
                  type="date"
                  name="birthDay"
                />
              </div>
              <div class="field-input">
                <p>Giới tính</p>
                <div class="radio">
                  <input type="radio" id="male" name="gender" value="male" />
                  <label for="male">Nam</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label for="female">Nữ</label>
                  <input type="radio" id="other" name="gender" value="other" />
                  <label for="other">Khác</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="body">
          <div class="d-flex">
            <div class="field-input big">
              <label for="email">Email</label> <br />
              <input
                v-model="data.Email"
                class="big form-input"
                type="email"
                name="email"
                placeholder="example@domain.com"
              />
            </div>

            <div class="field-input smal">
              <label for="phoneNumber"
                >Số điện thoại <span style="color: red">(*)</span></label
              >
              <br />
              <input
                v-model="data.PhoneNumber"
                class="form-input"
                type="number"
                name="phoneNumber"
                required
              />
            </div>
          </div>

          <div class="d-flex">
            <div class="field-input big">
              <label for="companyName">Tên công ty</label> <br />
              <input class="big form-input" type="text" name="companyName" />
            </div>

            <div class="field-input small">
              <label for="taxCode">Mã số thuế</label> <br />
              <input
                class="small form-input"
                type="text"
                name="taxCode"
                placeholder="Mã số thuế của công ty"
              />
            </div>
          </div>

          <div class="d-flex">
            <div class="field-input bigger">
              <label for="address">Địa chỉ</label> <br />
              <input
                v-model="data.Address"
                class="bigger form-input"
                type="text"
              />
            </div>
          </div>
        </div>

        <div class="form-foot">
          <button CommandType="Cancel" v-on:click="resetform">Hủy</button>
          <button CommandType="Save" v-on:click="save">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import EventBus from "./../main";
export default {
  data() {
    return {
      show: false,
      formMode: null,
      data: {
        EmployeeCode: "",
        FullName: "",
        Gender: "",
        DateOfBirth: "",
        PhoneNumber: "",
        Email: "",
        Address: "",
        Salary: "",
      },
    };
  },

  methods: {
    cancel() {
      this.show = false;
    },
    resetform() {
      // let field = document.getElementsByClassName("form-input");
      // for(var i = 0; i< field.length; i++){
      //   field[i].value="";
      // }
      this.data = {
        EmployeeCode: "",
        FullName: "",
        Gender: "",
        DateOfBirth: "",
        PhoneNumber: "",
        Email: "",
        Address: "",
        Salary: "",
      };
      this.cancel();
    },
    showForm() {},
    save() {
      let me = this,
        data = me.data,
        msg = 1,
        url = "http://cukcuk.manhnv.net/v1/Employees";
      if (this.formMode == "Edit") {
        url += "/" + data.EmployeeId;
        axios
          .put(url, this.data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            msg = 0;
          });
      }
      if (me.formMode == "Add") {
        console.log(url);
        axios
          .post(url, me.data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            msg = 0;
          });
      }
      me.show = false;
      EventBus.$emit("reset-tb", msg);
    },
  },
  mounted() {
    EventBus.$on("send-data", (param) => {
      let me = this;
      me.resetform();
      if (param.mode == "Edit") {
        me.data = param.data;
      }
      me.formMode = param.mode;
      me.show = true;
    });
  },
};
</script>

<style>
.wrap-form {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgb(192, 180, 180); */
  background-color: #808080cf;
}

.form-content {
  width: 700px;
  height: 650px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  position: relative;
  display: block;
}

.img-avatar {
  width: 180px;
  object-fit: contain;
  border-radius: 50%;
  border: 1px solid black;
  margin: 15px 20px;
}

.div-avatar p {
  width: 200px;
  text-align: center;
}

form {
  width: 96%;
  height: 100%;
  padding: 0 2%;
}
.body {
  padding-right: 20px;
  padding-left: 10px;
}
.head-form {
  height: 270px;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}

.div-avatar {
  width: 200px;
  height: 100%;
  margin-right: 20px;
}

.right-form {
  flex: 1;
  display: block;
}

.inline-block {
  display: inline-block;
}
.field-input {
  width: 45%;
  padding: 5px;
}
.radio {
  display: flex;
  margin-top: 20px;
}
label .gender {
  margin-left: 5px;
  margin-right: 15px;
}
.form-foot {
  bottom: 0;
  left: 0;
  position: absolute;
  height: 50px;
  background-color: #808080cf;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  align-items: center;
  float: right;
}

.form-foot button {
  width: 70px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(31, 153, 31);
  margin-left: 20px;
}

.form-input {
  margin-top: 10px;
  width: 100%;
  height: 40px;
  padding: 5px;
}
input[type="radio"] {
  height: 25px !important;
  width: 30px !important;
  margin-right: 5px;
  margin-left: 10px;
}
.small {
  flex: 1;
}
#selector {
  height: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
}
.big {
  width: 400px;
}
.d-flex {
  margin-bottom: 10px;
}
.form-content input {
  height: 40px;
  box-sizing: border-box;
  border-radius: 5px;
}
.bigger {
  width: 100%;
}
.right-form input {
  width: 100%;
  border: 1px solid;
  border-radius: 5px;
}
/* [CommandType="Cancel"]{
  background-color:  rgb(31, 153, 31);
}

[CommandType="Save"]{
  background-color: rgb(31, 153, 31);
} */
</style>
