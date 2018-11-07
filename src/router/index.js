import Vue from 'vue';
import Router from 'vue-router';
import AllBlogs from '@/components/AllBlogs';
// import Readblog from '@/components/blog/Readblog';
import BlogD from '@/components/blog/BlogD';
import User from '@/components/User/User';
import Music from '@/components/category/Music';
import Politics from '@/components/category/Politics';
import Technology from '@/components/category/Technology';
import Culture from '@/components/category/Culture';
import Sport from '@/components/category/Sport';
import Art from '@/components/category/Art';
import Game from '@/components/category/Game';
import Education from '@/components/category/Education';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'AllBlogs',
    component: AllBlogs,
  }, {
    path: '/Readblog/:title/:id',
    name: 'Readblog',
    component: BlogD,
  }, {
    path: '/User/:name/:id',
    name: 'User',
    component: User,
  }, {
    path: '/Category/Music',
    name: 'Category',
    component: Music,
  }, {
    path: '/Category/Politics',
    name: 'Category',
    component: Politics,
  }, {
    path: '/Category/Technology',
    name: 'Category',
    component: Technology,
  }, {
    path: '/Category/Culture',
    name: 'Category',
    component: Culture,
  }, {
    path: '/Category/Sport',
    name: 'Category',
    component: Sport,
  }, {
    path: '/Category/Art',
    name: 'Category',
    component: Art,
  }, {
    path: '/Category/Game',
    name: 'Category',
    component: Game,
  }, {
    path: '/Category/Education',
    name: 'Category',
    component: Education,
  }],
});
