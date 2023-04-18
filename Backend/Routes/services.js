const router = require("express").Router()

const { Router } = require("express");
const EventsController = require("../Controllers/EventsController");
const UserController = require("../Controllers/UserController")


//create event
router.route("/events").post((req, res) => EventsController.create(req,res));

//busca todos os eventos
router.route("/eventsget").get((req, res) => EventsController.getAll(req,res));

//delete evento by id
router.route("/events/:id").delete((req, res) => EventsController.delete(req,res));

//update
router.route("/events/:id").put((req, res) => EventsController.update(req,res));


module.exports = router