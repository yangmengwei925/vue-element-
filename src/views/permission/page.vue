<template>
  <div class="app-container">
    <header>
       <div>所属单位名称：
        <el-input v-model="input" placeholder="" style="width:15%;background:#ccc"></el-input>
            <span style="margin-left:20px;display:black">是否含下级:<el-radio-group v-model="radio" style="margin-left:30px">
                    <el-radio :label="3">是</el-radio><el-radio :label="9">否</el-radio>
                  </el-radio-group>
            </span>
      </div> 
        <div style="margin-top:20px">
        合同编号:
        <el-input placeholder="请输入文本" v-model="input1" clearable style="width:15%;background:#ccc;margin-left:20px"></el-input>&nbsp;&nbsp;
            原借款方：
            <el-input placeholder="请输入文本" v-model="input2" clearable style="width:15%;background:#ccc;margin-left:20px" ></el-input>&nbsp;&nbsp;
            债权人名称:
            <el-input placeholder="请输入文本" v-model="input3" clearable style="width:15%;background:#ccc;margin-left:20px" ></el-input>&nbsp;&nbsp;
            合同名称:<el-input placeholder="请输入文本" v-model="input4" clearable style="width:15%;background:#ccc;margin-left:20px"></el-input>&nbsp;&nbsp;
        </div>
         <div style="display:flex">
            <div style="display:flex;justify-content:space-between">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                      <el-form-item label="" style="width:100%;">
                        债务举借方式:
                        <el-select v-model="formInline.region" placeholder="--请选择--" style="width:50%;margin-top:20px">
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
            </div>
                <div style="display:flex;justify-content:space-between">
                  <el-form :inline="true" :model="formInline" class="demo-form-inline">
                          <el-form-item label="" style="width:100%;">
                          债权人类别:
                            <el-select v-model="formInline.region1" placeholder="--请选择--" style="width:50%;margin-top:20px;margin-left:5px">
                              <el-option label="--请选择--" value="shanghai8"></el-option>
                              <el-option label="信用借款" value="beijing9"></el-option>
                              <el-option label="其他部门和机构担保" value="shanghai3"></el-option>
                              <el-option label="铁路建设基金担保" value="beijing11"></el-option>
                              <el-option label="抵押担保" value="shanghai12"></el-option>
                              <el-option label="质押担保" value="shanghai13"></el-option>
                              <el-option label="主权担保" value="shanghai14"></el-option>
                              <el-option label="其他" value="其他15"></el-option>
                            </el-select>
                          </el-form-item>          
                    </el-form>
                  </div>
                        <div style="display:flex;justify-content:space-between">
                  <el-form :inline="true" :model="formInline" class="demo-form-inline">
                          <el-form-item label="" style="width:100%;">
                            债务类别:
                            <el-select v-model="formInline.region2" placeholder="--请选择--" style="width:50%;margin-top:20px;">
                              <el-option label="--请选择--" value="shanghai16"></el-option>
                              <el-option label="信用借款" value="beijing17"></el-option>
                              <el-option label="其他部门和机构担保" value="shanghai18"></el-option>
                              <el-option label="铁路建设基金担保" value="beijing19"></el-option>
                              <el-option label="抵押担保" value="shanghai20"></el-option>
                              <el-option label="质押担保" value="shanghai21"></el-option>
                              <el-option label="主权担保" value="shanghai22"></el-option>
                              <el-option label="其他" value="其他23"></el-option>
                            </el-select>
                          </el-form-item>          
                    </el-form>
                  </div>
                  <div style="display:flex;justify-content:space-between">
                      <el-form :inline="true" :model="formInline" class="demo-form-inline" >
                          <el-form-item label="" style="width:100%;">
                      债务单位类别:<el-select v-model="formInline.region3" placeholder="--请选择--" style="width:50%;margin-top:20px;">
                          <el-option label="--请选择--" value="sh24"></el-option>
                          <el-option label="信用借款" value="bei25"></el-option>
                          <el-option label="其他部门和机构担保" value="shan26"></el-option>
                          <el-option label="铁路建设基金担保" value="bei27"></el-option>
                          <el-option label="抵押担保" value="shangi28"></el-option>
                          <el-option label="质押担保" value="shang29"></el-option>
                          <el-option label="主权担保" value="shaai30"></el-option>
                          <el-option label="其他" value="其他31"></el-option>
                        </el-select>
                      </el-form-item>          
                    </el-form>
                  </div>
         </div>   
         <div style="display:flex">
            <div style="display:flex;justify-content:space-around">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                      <el-form-item label="" style="width:100%;">
                        币重:
                        <el-select v-model="formInline.region4" placeholder="--请选择--" style="margin-left:50px;width:50%;margin-top:20px">
                          <el-option label="--请选择--" value="shanghai32"></el-option>
                          <el-option label="信用借款" value="beijing33"></el-option>
                          <el-option label="其他部门和机构担保" value="shanghai34"></el-option>
                          <el-option label="铁路建设基金担保" value="beijing35"></el-option>
                          <el-option label="抵押担保" value="shanghai36"></el-option>
                          <el-option label="质押担保" value="shanghai37"></el-option>
                          <el-option label="主权担保" value="shanghai38"></el-option>
                          <el-option label="其他" value="其他39"></el-option>
                        </el-select>
                      </el-form-item>          
                </el-form>
            </div>
              <div style="display:flex;justify-content:space-around">
                  <el-form :inline="true" :model="formInline" class="demo-form-inline">
                          <el-form-item label="" style="width:100%;">
                            利息算法:
                            <el-select v-model="formInline.region5" placeholder="--请选择--" style="width:50%;margin-top:20px;margin-left:30px">
                              <el-option label="--请选择--" value="shanghai40"></el-option>
                              <el-option label="信用借款" value="beijing41"></el-option>
                              <el-option label="其他部门和机构担保" value="shanghai42"></el-option>
                              <el-option label="铁路建设基金担保" value="beijing43"></el-option>
                              <el-option label="抵押担保" value="shanghai44"></el-option>
                              <el-option label="质押担保" value="shanghai45"></el-option>
                              <el-option label="主权担保" value="shanghai46"></el-option>
                              <el-option label="其他" value="其他47"></el-option>
                            </el-select>
                          </el-form-item>          
                    </el-form>
                  </div>
                    <div>担保法：
                      <el-input v-model="input6" placeholder="" style="width:60%;background:#ccc;margin-top:20px;margin-left=10px"></el-input>
            
                  </div> 
                <div style="display:flex;justify-content:space-between;">
                  <el-form :inline="true" :model="formInline" class="demo-form-inline" >
                          <el-form-item label="" style="width:100%;margin-left=50px">
                            状态:
                            <el-select v-model="formInline.region6" placeholder="--请选择--" style="width:50%;margin-top:20px;margin-left:20px">
                              <el-option label="--请选择--" value="shanghai48"></el-option>
                              <el-option label="待付" value="beijing49"></el-option>
                              <el-option label="展期-待付核" value="shanghai50"></el-option>
                              <el-option label="變更-代付核" value="beijing51"></el-option>
                              <el-option label="工單修改後核" value="shanghai52"></el-option>
                            </el-select>
                          </el-form-item>          
                    </el-form>
                  </div>
                    
        </div>
            <div style="display:flex;">
                          <div class=block style="display:flex;line-height:50px">
                            合同開始日期:<el-date-picker
                              v-model="value1"
                              type="date"
                              placeholder="開始時間" style="width:50%">
                            </el-date-picker>
                          </div>&nbsp;&nbsp;
                              <div class="block" style="display:flex;line-height:50px">
                                <el-date-picker
                                  v-model="value2"
                                  align="right"
                                  type="date"
                                  placeholder="結束時間"
                                  :picker-options="pickerOptions">
                                </el-date-picker>
                              </div>
                             <div class=block style="display:flex;line-height:50px">
                            &nbsp;&nbsp;合同到期日期:<el-date-picker
                              v-model="value3"
                              type="date"
                              placeholder="開始時間" style="width:50%">
                            </el-date-picker>
                          </div>
                              &nbsp;&nbsp;<div class="block" style="display:flex;line-height:50px">
                                <el-date-picker
                                  v-model="value4"
                                  align="right"
                                  type="date"
                                  placeholder="結束時間"
                                  :picker-options="pickerOptions">
                                </el-date-picker>
                              </div>
          
            </div>
        <div style="float:right;"> 
            <el-button type="primary" icon="el-icon-search" size="mini" >搜索</el-button>
            <el-button icon="el-icon-refresh" size="mini">重置</el-button>
            <el-button type="primary" icon="el-icon-search" size="mini" style="background:#fff;color:#ccc">下載導入保存</el-button>
            <el-button icon="el-icon-refresh" size="mini">導入保存合同</el-button>
            

        </div>
       </header>
       <main>
        <el-button type="primary" icon="el-icon-search" size="mini" >刪除</el-button>
            <el-button icon="el-icon-refresh" size="mini">導入</el-button>
       </main>
       <footer>
        <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="序号"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="合同编号"
                width="120">
              </el-table-column>
              <el-table-column
                prop="ContractName"
                label="合同名称"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="money"
                label="总金额"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="DebtCategory"
                label="债务类别"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="ContractStartDate"
                label="合同开始日期"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="ContractExpirationDate"
                label="合同到期日期"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="operation"
                label="状态"
                show-overflow-tooltip>
              </el-table-column>
        </el-table>

       </footer>
      </div>
   </template>
<script>

export default {
  data() {
    return {
      input:"",//所屬單位名稱
     input6:"",//擔保法
      radio:3,//是與否
      input1:"",//合同编号
       input2:"",//原借款方
        input3:"",//债权人名称
         input4:"",//合同名称
         formInline:{
            region1:"",//债务方式
            region2:"",//债务单位类别
              region3:"",//债务方式
            region4:"",//债务单位类别
              region5:"",//债务方式
            region6:"",//债务单位类别
         },
        //  時間
          pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        // 尾部
         tableData: [{
          date: '2',
          name: '3',//合同编号
          ContractName: '4',//合同名稱
         money:"5",//總金額
         DebtCategory:"t",//债务类别
         ContractStartDate:"7",//合同开始日期
         ContractExpirationDate:"8",//合同到期時間
          operation:"9"//狀態

        }],
      };           
  },
    methods:{
      onSubmit() {
        console.log('submit!');
      },
       toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
      }
  }
</script>
<style>
*{
  margin:0;
  padding:0;
}
 .app-container{
   width:100%;
   height: 100%;
   display: flex;
   flex-direction: column;
 }
  header{
    width:100%;
    height: 350px;
  }
  /*债务*/ 
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 30px;
  }
  
  .el-icon-arrow-down {
    font-size: 12px;
  }
  main{
    margin-top:10px;
    flex:1;
    overflow: auto;
  }
  footer{
    width:100%;
    height: 100px;
    
  }
</style>
