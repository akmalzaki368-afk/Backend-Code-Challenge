import type { Request, Response } from "express";
import { pool } from "../db/db.js";

// CREATE
export const createTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const result = await pool.query(
        "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
        [title, description]
    );
    res.json(result.rows[0]);
};

// GET ALL (with filter)
export const getTasks = async (req: Request, res: Response) => {
    const { title } = req.query;

    let query = "SELECT * FROM tasks";
    let values: any[] = [];

    if (title) {
        query += " WHERE title ILIKE $1";
        values.push(`%${title}%`);
    }

    const result = await pool.query(query, values);
    res.json(result.rows);
};

// GET ONE
export const getTask = async (req: Request, res: Response) => {
    const result = await pool.query(
        "SELECT * FROM tasks WHERE id = $1",
        [req.params.id]
    );
    res.json(result.rows[0]);
};

// UPDATE
export const updateTask = async (req: Request, res: Response) => {
    const { title, description } = req.body;

    const result = await pool.query(
        "UPDATE tasks SET title=$1, description=$2 WHERE id=$3 RETURNING *",
        [title, description, req.params.id]
    );

    res.json(result.rows[0]);
};

// DELETE
export const deleteTask = async (req: Request, res: Response) => {
    await pool.query("DELETE FROM tasks WHERE id=$1", [req.params.id]);
    res.json({ message: "Deleted successfully" });
};