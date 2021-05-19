.<template>
  <div class="sidebar">
    <div class="logo">
      <div class="right-logo">
        <img src = "../assets/img/cukcuk-logo.png" alt = "cuk-cuk-logo">
      </div>
      <div class="left-logo">
        <img src="../assets/img/toggle.png">
      </div>
    </div>
    <ul>
      <div class="selection">
        <img src = "../assets/icon/dashboard.png">
        <router-link to = "/sumary">
        <li class="title">Tổng quan</li>
        </router-link>
      </div>
      <div class="selection">
        <img src = "../assets/icon/report.png">
        <router-link to = "/report">
        <li class="title">Báo cáo</li>
        </router-link>
      </div>
      <div class="selection">
        <img src = "../assets/icon/dashboard.png">
        <router-link to = "/product">
        <li class="title">Mua hàng</li>
        </router-link>
      </div>
      <div class="selection">
        <img src = "../assets/icon/dic-employee.png">
        <router-link to = "/customers">
        <li class="title">Danh mục nhân viên</li>
        </router-link>
      </div>
      <div class="selection">
        <img src = "../assets/icon/setting.png">
        <router-link to = "/product">
        <li class="title">Thiết lập hệ thống</li>
        </router-link>
      </div>
      
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
  padding:0;
  margin: 0;
}
  .sidebar{
    width: 200px;
    height: 100%;
    border-collapse:collapse ;
    border: none;
  }
  .title{
    margin: 20px 0px;
    flex:1 ;
  }
  .logo{
    display: flex;
    flex-direction: row-reverse;
    height: 80px;
    width: 90%;
    padding-bottom:0;
  }
  .sidebar img{
    object-fit: contain;
    width: 70%;
    margin: auto;
  }
  .logo .left-logo{
    flex: 1;
    align-items: center;
    display: flex;
  }
  .logo .right-logo{
    max-width: 80%;
    display: flex;
    max-height:100% ;
    padding-bottom: 0 ;
  }
  .right-logo img{
    width: 90%;
  }
  li{
    list-style-type: none;
    text-decoration: none;
  }
  a,.title{
    text-decoration: none;
    text-align: left;
    color:black;
  }
  .selection{
    display: flex;
  }
  .selection img{
    width: 20%;
    margin:0 10px;
  }
</style>