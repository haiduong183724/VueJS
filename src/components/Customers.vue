.<template>
  <div class="main" id = "employees">
    <div class="main-header">
      <a href="">
        <span>
          <img src="../assets/icon/add.png" alt="">
        </span>
        Thêm nhân viên
      </a>
      <h2>Danh sách nhân viên</h2>
    </div>
    <div class="tool-bar">
        <form action="">
          <label for="" class="field">
            <span>
              <img src="../assets/icon/search.png" alt="a">
            </span>
            <input type="text" placeholder="tìm kiếm nhân viên bằng mã nhân viên">
          </label>
        </form>
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
          <tr v-for="(nv,index) in employees" :key="nv.EmployeeCode" :class="{'gray-bg':(index%2)}">
            <td>{{nv.EmployeeCode}}</td>
            <td>{{nv.FullName}}</td>
            <td>{{nv.Gender}}</td>
            <td>{{nv.DateOfBirth}}</td>
            <td>{{nv.PhoneNumber}}</td>
            <td>{{nv.Email}}</td>
            <td>{{nv.PositionName}}</td>
            <td>{{nv.Department}}</td>
            <td>{{nv.Salary}}</td>
            <td>{{nv.WorkStatus}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
 
<script>
  const axios = require("axios");
  import swal from 'sweetalert';
export default {
  data() {
    return{
      employees:{}
    }
  },
  mounted(){
    swal("waiting");
    axios.get("http://cukcuk.manhnv.net/v1/Employees").then(response=>{
    this.employees = response.data;
    });
  },

  method:{

  }
}
</script>

<style>
.main{
  width: 100%;
  flex: 1;
  border: 1px solid;
  border-collapse:collapse ;
  display: flex;
  flex-direction: column;
}
  .main-header{
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 50px;
  }
  .main-header h2{
    margin: 10px;
    text-align:left;
    flex: 1;
  }
  .main-header a{
    margin: 5px;
    padding: 12px;
    border: 1px solid;
    background-color:green;
    display: flex;
    color: white;
    border-radius:5px ;
  }
  span{
    margin-right:10px ;
  }
  .tool-bar{
    height: 50px;
    display: flex;
    margin:10px ;
  }
  .field{
    display: flex;
    padding: 8px 12px;
    border: 1px solid;
    position: relative;
    width: 300px;
    max-height: 100%;
    border-radius: 5px;
  }
  input[type = "text"]{
    border: none;
    width: 100%;
    padding: 0;
    margin-left: 10px;
  }
  .list-employee{
    height: auto;
    max-height: 75%;
    border-bottom:5px solid black ;
  }
  thead td{
    border: none;
  }
  tr {
    border: none;
    border-top: 1px solid;
  }
  tr td{
    border: none;
    height: 40px;
  }
  .gray-bg{
    background-color:rgb(224, 240, 240) ;
  }
</style>