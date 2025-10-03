import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

/**
 * TODO: Crear el TaskSchema con los siguientes campos:
 * 
 * - title: String (required)
 * - description: String (opcional, default: "")
 * - category: String (required)
 *   - enum: ["work", "personal", "urgent", "other"]
 *   - default: "other"
 * - status: String (required)
 *   - enum: ["pending", "completed"]
 *   - default: "pending"
 * 
 * Configuración del Schema:
 * - versionKey: false
 * - timestamps: true (para createdAt y updatedAt automáticos)
 * 
 * Exportar el modelo como:
 * export const Task = models.Task || model("Task", TaskSchema);
 */

// Implementa tu TaskSchema aquí
