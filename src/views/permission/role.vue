<template>
  <div class="container-div">
    <form class="form-horizontal" id="type-form">
        <div class=" row">
            <div class="col-sm-12 search-collapse">
                <div class="row" style="float:left">
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="form-group" style="float:left;margin-left=100px;margin-top:20px">
                            <label class="col-sm-5 control-label" style="width:20%"></label>
                            <div class="col-sm-7">
                                <input type="hidden" name="sContractUnitId" />
                                所属单位名称：<input type="text" class="form-control" name="sContractUnitName"
                                       onmouseover="this.title=this.value" required onclick="$.openUnitName('sContractUnitId', 'sContractUnitName');"
                                       readonly/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label"></label>
                        <div class="col-sm-7" style="margin-left=10px;margin-top:50px">
                            合同名稱：<input type="text" class="form-control" name="sContractCode" placeholder="请输入文本" style="margin-left:30px"/>
                        </div>
                    </div>
                </div>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-3" >
                        <div class="form-group" style="margin-top:20px">
                            <div class="col-sm-7" style="float:left;margin-top:20px">
                               是否含下级： <label class="radio-box"> <input type="radio" name="sLowerLevel" value="Y" /> 是</label>
                                <label class="radio-box"> <input type="radio" name="sLowerLevel" value="N" checked/> 否 </label>
                            </div>
                        </div>
                    </div>
                    <br/>
                <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="col-sm-7" style="margin-left=10px;margin-top:50px">
                            合同编号：<input type="text" class="form-control" name="sContractCode" placeholder="请输入文本" style="margin-left:30px"/>
                        </div>
                            <div class="form-group" style="margin-left=10px;margin-top:20px">
                                <div class="col-sm-7" >
                                    原借款方：<input type="text" class="form-control" name="sOriginalBorrower" placeholder="请输入文本"/>
                                </div>
                            </div>
                        <div class="form-group" style="margin-left=10px;margin-top:20px">
                            <label class="col-sm-5 control-label"></label>
                            <div class="col-sm-7">
                                债权人名称：<input type="text" class="form-control" name="sCreditorName" placeholder="请输入文本"/>
                            </div>
                        </div>
                        <div class="form-group">
                        <label class="col-sm-5 control-label">债权人：</label>
                        <div class="col-sm-7">
                            <select name="sCreditorType" class="form-control">
                                <option value="">--请选择--</option>
                                <option value="0">国家开发银行</option>
                                <option value="1">农业发展银行</option>
                                <option value="2">进出口银行</option>
                                <option value="3">工商银行</option>
                                <option value="4">农业银行</option>
                                <option value="5">中国银行</option>
                                <option value="6">建设银行</option>
                                <option value="7">交通银行</option>
                                <option value="8">邮政储蓄银行</option>
                                <option value="9">招商银行</option>
                                <option value="10">中信银行</option>
                                <option value="11">光大银行</option>
                                <option value="12">民生银行</option>
                                <option value="13">兴业银行</option>
                                <option value="14">浦东发展银行</option>
                                <option value="15">亚洲开发银行</option>
                                <option value="16">日本政府贷款</option>
                                <option value="17">华夏银行</option>
                                <option value="18">北京银行</option>
                                <option value="19">广东发展银行</option>
                                <option value="20">世界银行</option>
                                <option value="21">渤海银行</option>
                                <option value="22">其他</option>
                                <option value="23">中国铁路总公司</option>
                                <option value="24">德国政府贷款</option>
                                <option value="25">法国政府贷款</option>
                                <option value="26">西班牙政府贷款</option>
                                <option value="27">美国进出口银行</option>
                                <option value="28">德国促进性贷款</option>
                                <option value="29">法国开发署贷款</option>
                                <option value="30">加拿大政府贷款</option>
                                <option value="31">奥地利政府贷款</option>
                                <option value="32">农商银行</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group" style="margin-left=100px">
                        <label class="col-sm-5 control-label"></label>
                        <div class="col-sm-7">
                            合同名称：<input type="text" class="form-control" name="sContractName" placeholder="请输入文本"/>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group" style="margin-left=100px">
                        <label class="col-sm-5 control-label"></label>
                        <div class="col-sm-7">
                            债务举借方式：<select name="sBorrowingType" class="form-control">
                                <option value="">--请选择--</option>
                                <option value="0">信用借款</option>
                                <option value="1">其他部门和机构担保</option>
                                <option value="2">铁路建设基金担保</option>
                                <option value="3">抵押担保</option>
                                <option value="4">质押担保</option>
                                <option value="5">主权担保</option>
                                <option value="6">其他</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group" style="float:left;margin-left=100px">
                        <label class="col-sm-5 control-label">币种：</label>
                        <div class="col-sm-7">
                            <select name="sCurrency" class="form-control">
                                <option value="">--请选择--</option>
                                <option value="0">RMB（人民币）</option>
                                <option value="1">GBP（英镑）</option>
                                <option value="2">HKD（港元）</option>
                                <option value="3">USD（美元）</option>
                                <option value="4">EUR（欧元）</option>
                                <option value="5">SGD（新加坡元）</option>
                                <option value="6">JPY（日元）</option>
                                <option value="7">CAD（加拿大元）</option>
                                <option value="8">AUD（澳元）</option>
                                <option value="9">CHF（瑞士法郎）</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label">债务类别：</label>
                        <div class="col-sm-7">
                            <select name="sDebtType" class="form-control">
                                <option value="">--请选择--</option>
                                <option value="0">带息应付票据贴现</option>
                                <option value="1">短期融资券</option>
                                <option value="2">银行短期借款</option>
                                <option value="3">其他短期借款</option>
                                <option value="4">银行长期借款</option>
                                <option value="5">其他长期借款</option>
                                <option value="6">中期票据</option>
                                <option value="7">信（委）托贷款</option>
                                <option value="8">铁路建设债券</option>
                                <option value="9">统借统还内资借款</option>
                                <option value="10">统借统还外资借款</option>
                                <option value="11">外资借款（国内）</option>
                                <option value="12">外资借款（国外）</option>
                                <option value="13">融资租赁</option>
                                <option value="14">保函</option>
                                <option value="15">担保</option>
                                <option value="16">信用证</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label">债务单位类别：</label>
                        <div class="col-sm-7">
                            <select name="sDebtUnitType" class="form-control">
                                <option value="">--请选择--</option>
                                <option value="0">铁路局本级</option>
                                <option value="1">铁路局多元</option>
                                <option value="2">国铁集团</option>
                                <option value="3">铁路局</option>
                                <option value="4">股改公司</option>
                                <option value="5">合资公司</option>
                                <option value="6">投资公司</option>
                                <option value="7">总公司直属单位</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label">利息算法：</label>
                        <div class="col-sm-7">
                            <select name="sInterestAlgorithm" class="form-control">
                                <option value="">--请选择--</option>
                                <option value="0">逐步累加</option>
                                <option value="1">先加后减</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label">合同开始日期：从</label>
                        <div class="col-sm-7">
                            <input type="text" class="time-input form-control" id="startTime" placeholder="开始时间"
                                   name="startTime" readonly/>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label">到：</label>
                        <div class="col-sm-7">
                            <input type="text" class="time-input form-control" id="endTime" placeholder="结束时间"
                                   name="endTime" readonly/>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label">合同到期日期：从</label>
                        <div class="col-sm-7">
                            <input type="text" class="time-input form-control" id="startTime2" placeholder="开始时间"
                                   name="startTime2" readonly/>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label">到</label>
                        <div class="col-sm-7">
                            <input type="text" class="time-input form-control" id="endTime2" placeholder="结束时间"
                                   name="endTime2" readonly/>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label">状态：</label>
                        <div class="col-sm-7">
                            <select name="stat" class="form-control">
                                <option value="">--请选择--</option>
                                <option value="4">复核通过</option>
                                <option value="5">提款还款中</option>
                                <option value="7">展期</option>
                                <option value="10">逾期</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label class="col-sm-5 control-label">担保方：</label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" name="sGuarantor" placeholder="请输入文本"/>
                        </div>
                    </div>
                </div>
                <div class="pull-right">
                    <div class="pull-right">
                        <a class="btn btn-primary btn-rounded btn-sm" onclick="$.table.search()"><i
                                class="fa fa-search"></i>&nbsp;搜索</a>
                        <a class="btn btn-warning btn-rounded btn-sm" onclick="$.form.reset()"><i
                                class="fa fa-refresh"></i>&nbsp;重置</a>
                        <a class="btn btn-success btn-rounded btn-sm" onclick="pendExcel()">
                            <i class="fa fa-cloud-download"></i> 下载导入提款和还款计划模板
                        </a>
                        <a id="importDrawing" class="btn btn-info btn-rounded btn-sm">
                            <i class="fa fa-upload"></i> 导入提款和还款计划
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="btn-group-sm" id="toolbar" role="group">
                <a class="btn btn-success" onclick="tk()"
                   >修改提款   <!--shiro:hasPermission="contractexecute:contractDrawingMain:maintk"-->
                </a>
                <a class="btn btn-success" onclick="hk()"
                   >修改还款计划    <!--shiro:hasPermission="contractexecute:contractDrawingMain:mainhk"-->
                </a>
                <a class="btn btn-success" onclick="xzhk()"   style="display:none"
                   >新增还款计划    <!--shiro:hasPermission="contractexecute:contractDrawingMain:mainhk"-->
                </a>
            </div>
            <div class="col-sm-12 select-table table-striped"  style=" ">
                <table id="bootstrap-table" data-mobile-responsive="true" ></table>
            </div>
        </div>
    </form>
</div>
  
</template>

<script>




export default {
  data() {
    return {
         columns:[
                [
                    {
                        checkbox: true,
                        rowspan: 2,
                    },
                    {
                    title: '序号',
                    field: 'index',
                    halign: 'center',
                    align: 'center',
                    valign: 'middle',
                    colspan: 1,
                    rowspan: 2,
                    switchable: false,
                    formatter: function (a, b, c) {
                        return $.table.serialNumber(c);
                    }
                },
                    {
                        /*field: 'sContractCode',*/
                        title: "合同编号",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2,
                        formatter: function(value, row, index) {
                            if(row.stat==7){
                                /*展期不可提款*/
                                var actions = [];
                                actions.push('<span> '+row.sContractCode+'</span>');
                                return actions.join('');
                            }
                            if(row.sDebtType==9||row.sDebtType==10){
                                /*统借统还不可进行提还款*/
                                var actions = [];
                                actions.push('<span> '+row.sContractCode+'</span>');
                                return actions.join('');
                            }
                            var actions = [];
                            actions.push('<a class="' + tkhkFlag + '" href="javascript:void(0)" onclick="openView(\'' + row.sContractId + '\')">' +row.sContractCode    +'</a> ');
                            return actions.join('');

                        }
                    },
                    {
                        field: 'sContractName',
                        title: "合同名称",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2
                    },
                    {
                        field: 'iTotalSum',
                        title: "合同金额",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2,
                        formatter: function (value) {
                            return value == undefined ? "0.00" : commaSeparateTowdecimal(value);
                        }
                    },
                    {
                        field: 'sCurrency',
                        title: "币种",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2,
                        formatter: function(value, row, index) {
                            return $.table.selectDictLabel(sCurrencyTrans, value);
                        }
                    },
                    {
                        field: 'sDebtType',
                        title: "债务类别",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2,
                        formatter: function(value, row, index) {
                            return $.table.selectDictLabel(debcateTrans, value);
                        }
                    },
                    {
                        field: 'iDrawMoneySum',
                        title: "已提款金额",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2,
                        formatter: function (value) {
                            return value == undefined ? "-" : commaSeparateTowdecimal(value);
                        }
                    },


                    {
                        title: "已还款金额",
                        valign:"middle",
                        align:"center",
                        colspan: 3,
                        rowspan: 1

                    },
                    {
                        title: "其他费用",
                        valign:"middle",
                        align:"center",
                        colspan: 5,
                        rowspan: 1
                    },
                    {
                        field: 'stat',
                        title: "状态",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2,
                        formatter: function(value, row, index) {
                            return $.table.selectDictLabel(statusTrans, value);
                        }
                    },
                    {
                        title: "实际提款及</br>计划还款明细",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2,
                        formatter: function(value, row, index) {
                            var actions = [];
                            actions.push('<a class="btn btn-success btn-xs ' + lokFlag + '" href="javascript:void(0)" onclick="lokFor(\'' + row.sContractId + '\')"><i class="glyphicon glyphicon-search"></i>查看</a> ');
                            return actions.join('');
                        }
                    },
                    {
                        field: 'sIsDrawing',
                        title: "是否按合同提款",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2,
                        visible: false,
                        switchable: false,
                        cardVisible: false

                    },
                    {
                        field: 'sContractId',
                        title: "合同id",
                        valign:"middle",
                        align:"center",
                        colspan: 1,
                        rowspan: 2,
                        visible: false,
                        switchable:false
                    },
                ],
                [
                    {
                        field: 'iRepaymentSum',
                        title: '本金',
                        valign:"middle",
                        align:"center",
                        formatter: function (value) {
                            return value == undefined ? "-" : commaSeparateTowdecimal(value);
                        }
                    },
                    {
                        field: 'iInterest',
                        title: '利息',
                        valign:"middle",
                        align:"center",
                        formatter: function (value) {
                            return value == undefined ? "-" : commaSeparateTowdecimal(value);
                        }
                    },
                    {
                        field: 'iOverdueInterest',
                        title: '逾期利息',
                        valign:"middle",
                        align:"center",
                        formatter: function (value) {
                            return value == undefined ? "-" : commaSeparateTowdecimal(value);
                        }
                    },
                    {
                        field: 'iServiceChargeRate',
                        title: '手续费',
                        valign:"middle",
                        align:"center",
                        formatter: function (value) {
                            return value == undefined ? "-" : commaSeparateTowdecimal(value);
                        }
                    },
                    {
                        field: 'iEarlyStageCharge',
                        title: '前期费',
                        valign:"middle",
                        align:"center",
                        formatter: function (value) {
                            return value == undefined ? "-" : commaSeparateTowdecimal(value);
                        }
                    },
                    {
                        field: 'iLiquidateDamageCharge',
                        title: '违约金费',
                        valign:"middle",
                        align:"center",
                        formatter: function (value) {
                            return value == undefined ? "-" : commaSeparateTowdecimal(value);
                        }
                    },
                    {
                        field: 'iGuaranteeCharge',
                        title: '保证费',
                        valign:"middle",
                        align:"center",
                        formatter: function (value) {
                            return value == undefined ? "-" : commaSeparateTowdecimal(value);
                        }
                    },
                    {
                        field: 'iGuaranteeCharge1',
                        title: '担保费',
                        valign:"middle",
                        align:"center",
                        formatter: function (value) {
                            return value == undefined ? "-" : commaSeparateTowdecimal(value);
                        }
                    }

                ]
            ]
    
         
    }
  },
  computed: {
   
  },
  created() {
    // Mock: get all routes and roles list from server
   
  },
  methods: {
    // Reshape the routes structure so that it looks the same as the sidebar
   
}
}
</script>

<style lang="scss" scoped>
.gray-bg {
    background-color: #f3f3f4;
}
 label{
        padding-right: 0px!important;
    }
    .detail-view {
        background-color: #fff!important;
    }
    .detail-view > td {
        padding-left: 6%!important;
        padding-right: 6%!important;
    }
    .detail-view > td .pagination-detail{
        display: none!important;
    }
    .layui-upload-file {
        display: none!important;
        opacity: .01;
    }
//     .form-control {
//     background: none repeat scroll 0 0 rgba(0, 0, 0, 0);
//     border: medium none;
//     font-size: 14px;
//     height: 80px;
//     margin: 0;
//     z-index: 2000;
// }
.form-control, .form-control:focus, .has-error .form-control:focus,  .has-success .form-control:focus, .has-warning .form-control:focus,  .navbar-collapse, .navbar-form, .navbar-form-custom .form-control:focus,  .navbar-form-custom .form-control:hover, .open .btn.dropdown-toggle,  .panel, .popover, .progress, .progress-bar {
    box-shadow: none;
}
// .form-control{
//    background: #FFFFFF none;
//     border: 1px solid #e5e6e7;
//     border-radius: 1px;
//     color: inherit;
//     display: block;
//     padding: 6px 12px;
//     -webkit-transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s  ease-in-out 0s;
//     transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s  ease-in-out 0s;
//     width: 100%;
//     font-size: 14px
// }

</style>
