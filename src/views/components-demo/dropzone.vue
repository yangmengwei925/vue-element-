<template>
  <div class="components-container">
        <header>
          <div style="display:flex;justify-content:space-between">
         
            <div style="display:flex;line-height:40px">
              <span style="color:red;display:black">*</span>
            债务分类：
              <el-form>
            
                 <el-form-item label="">
                    <el-select v-model="formInline.region1" placeholder="--請選擇--">
                    <el-option label="--请选择--" value="shanghai"></el-option>
                    <el-option label="带息应付票据贴现" value="beijing"></el-option>
                    <el-option label="--短期融资券--" value="shanghai"></el-option>
                    <el-option label="带息应付票据贴现" value="beijing"></el-option>
                    <el-option label="--银行短期贷款--" value="shanghai"></el-option>
                    <el-option label="带息应付票据贴现" value="beijing"></el-option>
                    <el-option label="--其他短期合同--" value="shanghai"></el-option>
                    <el-option label="银行长期合同" value="beijing"></el-option>
                    <el-option label="--其他长期合同--" value="shanghai"></el-option>
                    <el-option label="--中期票据--" value="beijing"></el-option>
                    <el-option label="--信(委托）贷款--" value="shanghai"></el-option>
                    <el-option label="铁路建设证券" value="beijing"></el-option>
                    <el-option label="--请选择--" value="shanghai"></el-option>
                    <el-option label="带息应付票据贴现" value="beijing"></el-option>
                  </el-select>
                  </el-form-item>
                 
                  
               </el-form>
              
            </div> 
             <div style="display:flex;line-height:40px">
            <span style="color:red;display:black">*</span>
            合同單位名称：
              <el-form>
                 <el-form-item label="">
                  <el-select v-model="formInline.region2" placeholder="--請選擇--" style="background:#ccc">
                 
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                   <el-button type="primary" icon="el-icon-search" style="background:#eee;border: 1px soild #fff">搜索 </el-button>
                </el-form-item>
                
               </el-form>
            
            </div> 
            <div style="display:flex;line-height:40px">
             <span style="color:red;display:black">*</span>
            债务单位类别：
              <el-form>
                 <el-form-item label="">
                  <el-select v-model="formInline.region3" placeholder="--請選擇--">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
               </el-form>
            
            </div> 
          </div>
          <div style="display:flex;justify-content:space-between">
            <div style="display:flex;line-height:40px;margin-left:30px">
            线路类别(按區域)：
              <el-form>
                 <el-form-item label="">
                  <el-select v-model="formInline.region1" placeholder="--請選擇--">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
               </el-form>
            
            </div> 
             <div style="display:flex;line-height:40px">
            铁路类别(按路线)：
              <el-form>
                 <el-form-item label="">
                  <el-select v-model="formInline.region2" placeholder="--請選擇--" style="background:#ccc">
                 
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                 
                </el-form-item>
                
               </el-form>
            
            </div> 
            <div style="display:flex;line-height:40px">
             <span style="color:red;display:black">*</span>
           用途：一級明細
              <el-form>
                 <el-form-item label="">
                  <el-select v-model="formInline.region3" placeholder="--請選擇--">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
               </el-form>
            </div> 
          </div>
             <div>
                <div style="display:flex;line-height:40px;margin-left:50px">
                <span style="color:red;display:black">*</span>
                用途：二級明細&nbsp;&nbsp;
                  <el-form>
                    <el-form-item label="">
                      <el-select v-model="formInline.region1" placeholder="--請選擇--">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                
                </div> 
            
            
          </div>
        </header>
        <hr style="border:1px solid #ccc"/>
        <main>
        <div style="width:100%;height:400px;display:flex;justify-content: center;">
         请选择债务类别
        </div>
        </main>
        <footer>
          <el-row>
            <el-button type="primary">提交</el-button>
             <el-button>保持</el-button>
          </el-row>


        
        </footer>
  </div>
</template>

<script>


export default {
  data(){
    return {
      formInline:{
         region1: '',
         region2: '',
         region3: ''
      }
      
    }
  },
  methods: {
      onSubmit() {
        console.log('submit!');
      },
      
  },
  
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .components-container{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  header{
    width:100%;
    height: 200px;
  }
  main{
    flex:1;
    overflow: auto;
    background: #eee;
  }
  
  .mark{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.4);
		position: fixed;
		top: 0px;
		left: 0px;
	}
  footer{
    width:100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items:center
  }
</style>
