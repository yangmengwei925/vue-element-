<template>
  <div>
    <header></header>
    <main>
      <!-- rowspan是行合并  上下合并 -->
      <!-- colspan是列合并  左右合并 -->
      <table width="100%" align="center" cellspacing="0" border="1">
        <tr bgcolor="#fff" align="center">
          <td>
            <span style="color:red">*</span>合同编号
          </td>
          <td>
            <el-input v-model="input" placeholder=''></el-input>
          </td>
          <el-button type="primary" icon="el-icon-search">关联</el-button>
          <td align="right">
            <span style="color:red">*</span>合同名称
          </td>
          <td rowspan="1">
            <el-input v-model="input" placeholder=''></el-input>
          </td>
        </tr>
          <tr bgcolor="#fff" align="center">
          <td>
            <span style="color:red">*</span>金额
          </td>
          <td>
            <el-input v-model="input" placeholder=''></el-input>
          </td>
           <td align="right"></td>
          <td align="right">
            <span style="color:red">*</span>币种
          </td>
          <td rowspan="1" style="margin:0;paddind:0">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region1"
                  style="margin-top:20px"
                  placeholder="--请选择--"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="信用借款" value="beijing2"></el-option>
                  <el-option label="其他部门和机构担保" value="shanghai3"></el-option>
                  <el-option label="铁路建设基金担保" value="beijing4"></el-option>
                  <el-option label="抵押担保" value="shanghai5"></el-option>
                  <el-option label="质押担保" value="shanghai6"></el-option>
                  <el-option label="主权担保" value="shanghai7"></el-option>
                  <el-option label="其他" value="其他7"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
        </tr>
        <tr bgcolor="#fff" align="center" style="height:10px;">
          <td>
            <span style="color:red">*</span>合同项目
          </td>
          <td>
            <el-input v-model="input" placeholder style="border:none"></el-input>
          </td>
          <el-button type="primary" icon="el-icon-search" style="margin-top:20px">选择</el-button>
          <!-- <td>3籍贯</td> -->
          <td align="right">
            <span style="color:red">*</span> 合同利率拆分
          </td>
          <td rowspan="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region2"
                  placeholder="--不拆分(单一利率)--"
                  style="margin-top:10px"
                >
                  <el-option label="--不拆分(单一利率)--" value="shanghai1"></el-option>
                  <el-option label="拆分为多个利率" value="beijing2"></el-option>
                  <el-option label="拆分为多金融多利率" value="shanghai3"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
        </tr>
        <tr bgcolor="#fff" align="right" style="height:30px;">
          <td>
            <span style="color:red">*</span>利率种类
          </td>
          <td rowspan="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region3"
                  placeholder="--请选择--"
                  style="margin-top:10px"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="固定利率" value="beijing2"></el-option>
                  <el-option label="浮动利率" value="shanghai3"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
          <td colspan="3"></td>
        </tr>
      </table>
      <table width="100%" height="30px" cellspacing="0" border="1">
        <tr bgcolor="#fff" align="right" style="height:30px;">
          <td colspan="1">
            <span style="color:red">*</span>年化种类
          </td>
          <td rowspan="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region3"
                  placeholder="--请选择--"
                  style="margin-top:10px"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="固定利率" value="beijing2"></el-option>
                  <el-option label="浮动利率" value="shanghai3"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
          <td align="right">
            <span style="color:red">*</span> 利息算法
          </td>
          <td rowspan="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region1"
                  placeholder="--逐步累加--"
                  style="margin-top:30px"
                >
                  <el-option label="--逐步累加--" value="shanghai1"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
        </tr>
        <tr bgcolor="#fff" align="right" style="height:30px;">
          <td colspan="1">
            <span style="color:red">*</span>提款方式:
          </td>
          <td rowspan="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region3"
                  placeholder="--请选择--"
                  style="margin-top:10px"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="一次提款" value="beijing2"></el-option>
                  <el-option label="多次提款" value="shanghai3"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
          <td align="right">
            <span style="color:red">*</span> 提款截止日期:
          </td>
          <td rowspan="1">
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </td>
        </tr>
        <tr bgcolor="#fff" align="right" style="height:30px;">
          <td>
            <span style="color:red">*</span>原款借方:
          </td>
          <td>
            <el-input v-model="input" placeholder style="border:none"></el-input>
          </td>
          <td colspan="2" align="left">(因单位变更,原签署合同单位)</td>
        </tr>
      </table>
      <table width="100%" cellspacing="0" border="1">
        <tr bgcolor="#fff" align="right" style="height:30px;">
          <td>
            <span style="color:red">*</span>债权人名称:
          </td>
          <td>
            <el-input v-model="input" placeholder style="border:none"></el-input>
          </td>
          <td align="right"></td>
          <td align="right">
            <span style="color:red">*</span> 债权人类别:
          </td>
          <td rowspan="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region1"
                  placeholder="--请选择--"
                  style="margin-top:30px"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="信用借款" value="beijing2"></el-option>
                  <el-option label="其他部门和机构担保" value="shanghai3"></el-option>
                  <el-option label="铁路建设基金担保" value="beijing4"></el-option>
                  <el-option label="抵押担保" value="shanghai5"></el-option>
                  <el-option label="质押担保" value="shanghai6"></el-option>
                  <el-option label="主权担保" value="shanghai7"></el-option>
                  <el-option label="其他" value="其他7"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
        </tr>
        <tr bgcolor="#fff" align="right" style="height:30px;">
          <td>
            <span style="color:red">*</span>债务举措方式:
          </td>
          <td rowspan="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region1"
                  placeholder="--请选择--"
                  style="margin-top:30px"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="信用借款" value="beijing2"></el-option>
                  <el-option label="其他部门和机构担保" value="shanghai3"></el-option>
                  <el-option label="铁路建设基金担保" value="beijing4"></el-option>
                  <el-option label="抵押担保" value="shanghai5"></el-option>
                  <el-option label="质押担保" value="shanghai6"></el-option>
                  <el-option label="主权担保" value="shanghai7"></el-option>
                  <el-option label="其他" value="其他7"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
          <td align="right"></td>
          <td align="right">担保人:</td>
          <td>
            <el-input v-model="input" placeholder style="border:none"></el-input>
          </td>
        </tr>
        <tr bgcolor="#fff" align="right" style="height:30px;">
          <td colspan="1">
            <span style="color:red">*</span>处理还款与非工作日
          </td>
          <td colspan="2">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region3"
                  placeholder="--请选择--"
                  style="margin-top:10px"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="前推是上一个工作日" value="beijing2"></el-option>
                  <el-option label="不变" value="shanghai3"></el-option>
                  <el-option label="后推是下一个工作日" value="shanghai3"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
          <td align="right">
            <span style="color:red">*</span> 处理结息与非工作日
          </td>
          <td colspan="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region1"
                  placeholder="--请选择--"
                  style="margin-top:30px"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="前推是上一个工作日" value="beijing2"></el-option>
                  <el-option label="不变" value="shanghai3"></el-option>
                  <el-option label="后推是下一个工作日" value="shanghai3"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
        </tr>
        <tr bgcolor="#fff" align="right" style="height:30px;">
          <td style="height:20px">
            <span style="color:red">*</span>是否计复利:
          </td>
          <td>
            <el-radio-group v-model="radio" align="left">
              <el-radio :label="3">是</el-radio>
              <el-radio :label="6">否</el-radio>
            </el-radio-group>
          </td>
          <td colspan="1"></td>
          <td align="right" style="height:20px">
            <span style="color:red">*</span> 合同开始时间
          </td>
          <td colspan="1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region1"
                  placeholder="--请选择--"
                  style="margin-top:30px"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="前推是上一个工作日" value="beijing2"></el-option>
                  <el-option label="不变" value="shanghai3"></el-option>
                  <el-option label="后推是下一个工作日" value="shanghai3"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
        </tr>
        <tr bgcolor="#fff">
          <td align="right" style>
            <span style="color:red">*</span> 结息方式
          </td>
          <td colspan="4">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label>
                <el-select
                  v-model="formInline.region1"
                  placeholder="--请选择--"
                  style="margin-top:30px;margin-left:120px"
                >
                  <el-option label="--请选择--" value="shanghai1"></el-option>
                  <el-option label="到期结息" value="beijing2"></el-option>
                  <el-option label="按期结息" value="shanghai3"></el-option>
                  <el-option label="按半年结息" value="shanghai3"></el-option>
                  <el-option label="按季结息" value="beijing2"></el-option>
                  <el-option label="按月结息" value="shanghai3"></el-option>
                  <el-option label="指定日期结息" value="shanghai3"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </td>
        </tr>
      </table>
      <table width="100%" cellspacing="0" border="1">
        <tr bgcolor="#fff" align="center" style="height:30px;">
          <td colspan="1">
            <span style="color:red">*</span>合同开始时间
          </td>
          <td rowspan="1">
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </td>
          <td align="right">
            <span style="color:red">*</span>合同到期时间
          </td>
          <td rowspan="1">
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </td>
        </tr>
        <tr bgcolor="#fff" align="right">
          <td>
            <span style="color:red">*</span>是否属于高铁债务:
          </td>
          <td>
            <el-radio-group v-model="radio" align="left">
              <el-radio :label="3">是</el-radio>
              <el-radio :label="6">否</el-radio>
              <el-radio :label="9">其他</el-radio>
            </el-radio-group>
          </td>

          <td style="height:20px">
            <span style="color:red">*</span> 是否属于循环贷
          </td>
          <td>
            <el-radio-group v-model="radio">
              <el-radio :label="3">是</el-radio>
              <el-radio :label="6">否</el-radio>
              <el-radio :label="9">其他</el-radio>
            </el-radio-group>
          </td>
        </tr>
        <tr bgcolor="#fff" align="right" height="40px">
          <td style="height:20px">
            <span style="color:red">*</span> 是否按合同指定还款计划
          </td>
          <td>
            <el-radio-group v-model="radio">
              <el-radio :label="3">是</el-radio>
              <el-radio :label="6">否</el-radio>
            </el-radio-group>
          </td>
        </tr>
        <tr bgcolor="#fff" align="center" height="40px">
          <td colspan="1" align="center">手续费</td>
          <td rowspan="1">
            <el-input
              type="text"
              placeholder
              size="40"
              style="width:50%;"
              v-model="text"
              show-word-limit
            ></el-input>%
          </td>
          <td align="center">前期费率</td>
          <td rowspan="1">
            <el-input
              type="text"
              placeholder
              size="40"
              style="width:60%;"
              v-model="text"
              show-word-limit
            ></el-input>%
          </td>
        </tr>
        <tr bgcolor="#fff" height="40px">
          <td colspan="1" align="center">变更生效时间</td>
          <td rowspan="1">
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              class="ipt"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </td>
        </tr>
        <tr bgcolor="#fff" align="center" height="40px">
          <td style="height:20px">录入人</td>
          <td colspan=4>
            <el-input v-model="input" placeholder="乌局业务" style="background:#ccc"></el-input>
          </td>
        </tr>
        <tr bgcolor="#fff" align="center" height="40px">
          <td style="height:20px">备注</td>
          <td colspan=4>
            <el-input v-model="input" placeholder="" style="background:#ccc"></el-input>
          </td>
        </tr>
        <tr bgcolor="#fff" align="center" height="40px">
          <td style="height:20px">
            <div>
                  <div class="mask" v-if="showModal" @click="showModal=false"></div>
                <div class="pop" v-if="showModal">

                      <div style="display:flex;justify-content:space-around;background:#ccc;line-height:50px">
                          <div>上传附件(点击空白关闭)</div>
                          <div>-</div>
                      </div>
                      <div class="tb">
                      <div class="center">11</div>
                      </div>
                      
                  </div>
                <button @click="showModal=true" class="btn">上传附件</button>
          </div>
          </td>
          <td colspan=3>
            <el-input v-model="input" placeholder="" style="background:#ccc"></el-input>
          </td>
        </tr>
         <tr bgcolor="#fff" align="right">
            <td colspan=2>
              <el-row><el-button type="primary">提交</el-button></el-row>
            </td>
            <td bgcolor="#fff" align="left" colspan=2>
              <el-row>  <el-button>保持</el-button></el-row>
            </td>
           </tr>
      </table>
    </main>
        <footer>
          
        </footer>
  </div>
</template>
<script>
// 还本利息
export default {
  data() {
    return {
      radio: 3,
      text: "",
      showModal: false,
      input: "",
      input1: "",
      formInline: {
        region1: "", //债务方式
        region2: "", //债务方式
        region3: "", //债务方式
        ickerOptions: {
          shortcuts: [
            {
              text: "今天",
              onClick(picker) {
                picker.$emit("pick", new Date());
              }
            },
            {
              text: "昨天",
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit("pick", date);
              }
            },
            {
              text: "一周前",
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit("pick", date);
              }
            }
          ]
        },
        value1: "",
        value2: "",
        value3: ""
      }
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
    border-collapse: collapse;
}

html,
body {
  width: 100%;
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 300px;
}
main {
  width: 100%;
overflow: auto;
 
}
.ipt {
  margin-left: 1px;
}
.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
.pop {
  background-color: #fff;
  position: fixed;
  top: 100px;
  left: 400px;
  width: calc(100% - 500px);
  height:calc(100% - 200px);
  z-index: 2;
  text-align: center;
}
.btn {
  background-color:rgb(0,137,209);
  border-radius: 4px;
  padding: 4px 12px;
  color:#fff;
  border:0
}
.btn:hover{
  color:rgb(0,137,209);
  background: rgb(0,137,209);
}
.tb:hover{
  width:100%;
  height: 100%;
  background: #666;
}
.center{
position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top:350px;
     margin-left:350px
}

footer {
  width: 100%;
  height: 100px;

}
</style>