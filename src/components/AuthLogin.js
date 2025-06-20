import React, { useState } from 'react';
import { loginUser } from '../utils/api';
const AuthLogin = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await loginUser(formData);
      if (result.success) {
        alert(result.message);
        onNavigate('home'); 
      } else {
        alert('Error al iniciar sesión (simulado)');
      }
    } catch (error) {
      console.error('Error en la simulación de login:', error);
      alert('Ocurrió un error durante el inicio de sesión (simulado)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Entrar'}
          </button>
        </div>
        <p className="text-center text-gray-600 text-sm mt-4">
          ¿No tienes cuenta? <button type="button" onClick={() => onNavigate('register')} className="text-green-600 hover:underline">Regístrate aquí</button>
        </p>
      </form>
    </section>
  );
};

export default AuthLogin;