import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Readblog from '@/components/blog/Readblog';
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
    name: 'HelloWorld',
    component: HelloWorld,
  }, {
    path: '/Readblog/:title/:id',
    name: 'Readblog',
    component: Readblog,
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
