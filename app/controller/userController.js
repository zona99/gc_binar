var express = require('express');
const knex = require('knex')(require('../../knexfile').development);
//const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = class {
    
    static getAllUser = async (req, res, next) => {
        try {
            const users = await knex('users')
              .select('*')
            res.status(200).json(users)
          } catch (error) {
            res.status(500).json({error: error.message})
          }
    };


    static addUser = (req, res, next) => {
        try {
            const {name, email, role, pass} = req.body;
            bcrypt.hash(pass, 12).then((password_enc) => {
              return knex('users')
                .insert({ 
                  name: name,
                  email: email,
                  role: role,
                  password: password_enc
                })
                .then((users) => {
                  res.status(201).json({message: 'Berhasil ditambahkan'});
                })
            });
          } catch (error) {
            res.status(500).json({error: error.message})
          }
    };


    // static addUser = async (req, res, next) => {
    //     try {
    //         const {name, email} = req.body;
    //         const [id] = await knex('users').insert({ name, email }).returning('id');
    //         res.status(201).json({id})
    //       } catch (error) {
    //         res.status(500).json({error: error.message})
    //       }
    // };


    
};