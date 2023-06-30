// Importar el modelo de gastos y otros módulos según sea necesario
const Expense = require('../models/egreso');

// Controlador para crear un nuevo gasto
const createExpense = async (req, res) => {
    try {
        const { name, amount } = req.body;
        const expense = new Expense({ name, amount });
        await expense.save();
        res.status(201).json({ message: 'Gasto creado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Otros controladores relacionados con los gastos aquí

module.exports = {
    createExpense,
    // Otros controladores aquí
};
