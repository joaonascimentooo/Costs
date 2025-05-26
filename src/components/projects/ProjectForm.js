import { useEffect, useState } from 'react';
import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}){
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setCategories(data);
        })
        .catch((error) => console.error('Error fetching categories:', error));
    }, []);
    console.log(categories);
    return(
        <form className={styles.form}>
            <Input type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do projeto!" />
            <Input type="number" 
            text="Orçamento do projeto" 
            name="budget" 
            placeholder="Insira o orçamento total!" />
            <Select 
            name="category_id" 
            text="Seleciona a categoria"
            options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm;