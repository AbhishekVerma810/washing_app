const express=require('express');
const router=express.Router();
const controller =require("../controller/index.js");
const { verifyToken } = require('../middleware/auth.middleware');

// auth api
router.post('/signup',controller.authController.signup);
router.post('/login',controller.authController.login);
router.get('/getUserData', verifyToken,controller.authController.getUserData);
router.post('/logout',verifyToken,controller.authController.logout);
router.post('updateProfile',verifyToken,controller.authController.updateProfile)

//loundry api

router.post('/addServices',verifyToken,controller.loundryServiceController.addLaundryService);
router.get('/getServices',verifyToken,controller.loundryServiceController.getLaundryServices);
router.delete('/deleteServices/:id',verifyToken, controller.loundryServiceController.deleteLaundryService);
 router.put('/updateServices/:id',verifyToken,controller.loundryServiceController.updateLaundryService);

 // // get alluser api
router.get("/getAllUserData",controller.authController.getAllUserData)

// order api
router.post('/createOrders',controller.orderController.createOrder);
router.get('/getAllOrders', controller.orderController.getAllOrders);
router.get('/getOrdersById/:id', controller.orderController.getOrderById);
router.put('/updateOrders/:id', controller.orderController.updateOrder);
router.delete('/deleteOrders/:id', controller.orderController.deleteOrder);



// payment api
router.post('/addPayment',controller.paymentController.addPayment)
router.get('/getPayment', controller.paymentController.getPaymentStatus);
// router.get('/getOrdersById/:id', controller.orderController.getOrderById);
router.put('/updatePayment/:id', controller.paymentController.updatePayment);
router.delete('/deletePayment/:id', controller.paymentController.deletePayment);

// address api
router.post('/createAddress',controller.addressController.addAddress);
router.get('/getAllAddress', controller.addressController.getAddress);
// router.get('/getOrdersById/:id', controller.orderController.getOrderById);
router.put('/updateAddress/:id', controller.addressController.updateAddress);
router.delete('/deleteDelete/:id', controller.addressController.deleteAddress);



// clothes item api
router.post('/createClothesItem',controller.clothesItemController.addItem);
router.get('/getClothesItem', controller.clothesItemController.getItem);
router.get('/getClothesItem/:id', controller.clothesItemController.getItem);
router.put('/updateClothesItem/:id', controller.clothesItemController.updateItem);
router.delete('/deleteClothesItem/:id', controller.clothesItemController.deleteItem);

// clothes category
router.post('/addClothesCategory',controller.clothesCategoryController.addClothesCategory);
router.get('/getClothesCategory', controller.clothesCategoryController.getClothesCategories);
router.get('/getClothesCategory/:id', controller.clothesCategoryController.getClothesCategories);
router.put('/updateClothesCategory/:id', controller.clothesCategoryController.updateClothesCategory);
router.delete('/deleteClothesCategory/:id', controller.clothesCategoryController.deleteClothesCategory);



module.exports=router;