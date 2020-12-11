import{a as e,h as s,i as o,o as i,j as l,k as a,w as r,n as t}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import"./index.51976da2.js";import"./Trigger.a445e86a.js";import"./omit.149aedfc.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.afd9afdf.js";import"./CheckOutlined.0ff5e6b7.js";import{s as n}from"./index.0c15d5ff.js";import"./colors.1efe187d.js";import"./RightOutlined.0310d066.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ad94a28d.js";import"./index.a172b251.js";import"./index.ed1896d8.js";import"./UpOutlined.060f27ef.js";import"./index.3ae0f855.js";import"./index.13851d4b.js";import"./index.c6c01f68.js";import"./useDebounce.460c0b67.js";import"./useEventListener.dafd0e6c.js";import"./useBreakpoint.9e160351.js";import{C as c}from"./index.617c50b6.js";import"./index.b191181c.js";import"./tsxHelper.20d71045.js";import"./index.85a2c56f.js";import"./propTypes.7f710850.js";import"./index.2e04fe2b.js";import{u as p}from"./useForm.a4438e73.js";const d=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>"1"===s?Promise.reject("值不能为1"):Promise.resolve(),trigger:"blur"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:c},setup(){const{createMessage:e}=s(),[o,{validateFields:i,clearValidate:l,getFieldsValue:a,setFieldsValue:r}]=p({labelWidth:120,schemas:d,actionColOptions:{span:24}});return{register:o,schemas:d,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=a();e.success("values:"+JSON.stringify(s))},setFormValues:function(){r({field1:"1111",field5:["1"],field7:"1"})},validateForm:async function(){try{await i()}catch(e){}},resetValidate:async function(){l()}}}});const u={class:"m-4"},f={class:"mb-4"},b=t("手动校验表单"),j=t("清空校验信息"),g=t("获取表单值"),v=t("设置表单值");m.render=function(e,s,t,n,c,p){const d=o("a-button"),m=o("BasicForm"),x=o("CollapseContainer");return i(),l("div",u,[a("div",f,[a(d,{onClick:e.validateForm,class:"mr-2"},{default:r((()=>[b])),_:1},8,["onClick"]),a(d,{onClick:e.resetValidate,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),a(d,{onClick:e.getFormValues,class:"mr-2"},{default:r((()=>[g])),_:1},8,["onClick"]),a(d,{onClick:e.setFormValues,class:"mr-2"},{default:r((()=>[v])),_:1},8,["onClick"])]),a(x,{title:"表单校验"},{default:r((()=>[a(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;