import vue from 'vue'
import vuerouter from 'vue-router'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import Home2 from '@/views/Home2'
import movie from '@/views/movie'
import moivenum from '@/components/10movie'
import login from '@/components/12login'
import Mvue from '@/App'
vue.use(vuerouter)
const router = new vuerouter(
    {
      routes:[
        {path:'/',redirect:'/login'},
        {path:'/login',component:login},
        {path:'/App',component:Mvue ,redirect:"/home",
        children:[{path:'/about',component:About},
        {path:'/home',component:Home},
        {path:'/home2',component:Home2},
        {path:'/movie',component:movie,children:[{path:':mid',component:moivenum,props:true},]},]},
        
      ]
    }
)
router.beforeEach(function(to,from,next){
       //判断访问的地址
       //
      if(to.path  === "/App" || to.path  === "/home"){
        const  token = localStorage.getItem('token')
        //判断是否有token 
        if (token){
          next()
        }else{
          next("/login")
        }
      }
      else{
        next()
      }
})

export default router
