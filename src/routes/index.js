import { Router } from "express"
import axios from 'axios'

const router = Router()

//RUTAS
router.get('/', (req, res) => {
    res.render('index', {
        title: 'First Web'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me'
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Us'
    })
})

router.get('/pruebaApi', async (req, res) => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    res.render('pruebaApi', {
        title: 'Prueba Api',
        data: response.data
    })
})

export default router