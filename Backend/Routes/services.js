const router = require("express").Router()

const { Router } = require("express");
const EventsController = require("../Controllers/EventsController");
const UserController = require("../Controllers/UserController")


//create event
router.route("/events").post((req, res) => EventsController.create(req,res));

//busca todos os eventos
router.route("/eventsget").get((req, res) => EventsController.getAll(req,res));

//busca evento por id
router.route("/events/:id").get((req, res) => EventsController.getId(req,res));

//deleta evento by id
router.route("/events/:id").delete((req, res) => EventsController.delete(req,res));

//deleta todos os eventos
router.route("/deleteEvents").delete((req, res) => EventsController.deleteAllevents(req,res));

//update
router.route("/events/:id").put((req, res) => EventsController.update(req,res));


module.exports = router