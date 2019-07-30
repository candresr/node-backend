import { Request, Response} from 'express';
import pool from '../database';
import { parse, stringify } from 'querystring';
import { strictEqual } from 'assert';

class GamesController{
    public async list(req: Request, res: Response){
        await pool.query("SELECT * FROM games", (err,result) => {
            if(err) throw err;
            res.json(result);
        });    
    } 
    public async create(req: Request, res: Response){
        await pool.query("INSERT INTO games set ?",[req.body])
        res.json({ message:"Game saved"});
    }
    public async delete(req: Request, res: Response){
        const {id} = req.params;
        await pool.query("DELETE FROM games WHERE id = ?",[id], (err,result) => {
            if(err) throw err;
            res.json({message: "The game was deleted"});
        });
    }
    public async update(req: Request, res: Response){
        const {id} = req.params;
        console.log(req.body);
        await pool.query("UPDATE games SET ? WHERE id = ?",[req.body,id], (err,result) => {
            if(err) throw err;
            res.json({message: "The game was updated"});
        });
    }
    public async getone(req: Request, res: Response){
        const {id} = req.params;
        await pool.query("SELECT * FROM games WHERE id = ?",[id], (err,result) => {
            if(err) throw err;
            res.json(result);
        });
    } 
}

export const gamesController = new GamesController();