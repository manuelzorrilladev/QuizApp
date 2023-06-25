import {createRouter,createWebHistory} from 'vue-router'

import QuizView from '../views/QuizView.Vue'
import ItemView from '../views/ItemView.Vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name:"Home",
            component:QuizView,
            meta: {
                title:'Quiz app'
            }
            
        },
        {
            path: "/quiz/:id",
            name: "Quiz",
            component: ItemView
        }
    ]
})

// router.beforeEach((to, from) => {
//     document.title = to.meta?.title ?? 'Title'
// })
router.beforeEach((to, from, next) => {
    // Get the page title from the route meta data that we have defined
    // See further down below for how we setup this data
    const title = to.meta.title
  
    //Take the title from the parameters
    const titleFromParams = to.params.pageTitle;
    // If the route has a title, set it as the page title of the document/page
    if (title) {
      document.title = title
    }
    // If we have a title from the params, extend the title with the title
    // from our params
    if (titleFromParams) {
      document.title = `${titleFromParams} - ${document.title}`;
    }
    // Continue resolving the route
    next()
  })

export default router