import { Request, Response } from "express";
import {QueryResult} from 'pg'
import {pool} from '../database'

export const getUsers = async(req:Request, res: Response): Promise<Response> => {
    try {
        const response:QueryResult = await pool.query('SELECT * FROM users ORDER BY id ')
        // console.log(response.rows)
        // res.send('users')
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server error')
    }
}

export const getUserbyId = async(req:Request, res:Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const response:QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    return res.json(response.rows)

    // console.log(req.params.id)
    // res.send('received')
}

export const createUser = async(req:Request, res:Response): Promise<Response> => {
    // console.log(req.body)
    // res.send('received')
    const {name, email} = req.body
    const response: QueryResult = await pool.query('INSERT INTO users (name,email) VALUES ($1, $2)', [name,email])
    // console.log({response})
    return res.json({
        message: 'User created Successfully',
        body: {
            user:{
                name,
                email
            }
        }
    })
}


export const updateUser = async(req:Request, res:Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    const {name, email} = req.body

    await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name,email,id])
    return res.json(`User ${id} Updated Successfully`)
}

export const deleteUser = async(req:Request, res:Response): Promise<Response> => {
    const id = parseInt(req.params.id)
    await pool.query('DELETE FROM users WHERE id = $1', [id])
    return res.json(`User ${id} deleted Successfully`)
}