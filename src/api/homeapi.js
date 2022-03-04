import request from "@/uilts/request";

export const  gethomeapi  = function(page,init){
  
  return request.get('/articles',{
    params:{
      page,
      init
    }
  })
}