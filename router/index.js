import home from "/views/Home.js"
import license from "/views/License.js"
import whereMyData from "/views/whereMyData.js"
import lesson from "/views/Lesson.js"
import quiz from "/views/Quiz.js"

const Route1 = {
  template:
    '<div style = "border-radius:20px;background-color:cyan;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 1</div>',
};
const Route2 = {
  template:
    '<div style = "border-radius:20px;background-color:green;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 2</div>',
};

const buyTheBook = {
  template: '#buyTheBook'
}

const routes = [
  { path: "/",   component:home
             
  },
  { path: "/license", component: license },
  { path: "/myData", component: whereMyData},
  { path: "/lesson/:lessonNum", component: lesson},
  { path: "/quiz/:lessonNum", component: quiz},
  { path: "/buyBook", component: buyTheBook}
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = Vue.createApp({});
app.use(router);

app.mount("#app");
