import express from 'express';
import { HomeController } from '../controllers/HomeController';
import Auth from '../middlewares/Auth';
//mandatory format
export default [
    {verb:'get',url:'/home', controller: HomeController.index,middleware:[]},
    {verb:'post',url:'/home', controller: HomeController.getpost, middleware:Auth},
]
