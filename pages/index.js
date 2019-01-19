import World from '../components/World'
import ConverterForm from '../components/ConverterForm'
import Head from '../components/Head'

const Formatter = () => <div>
<ConverterForm />
    <World />
    <style jsx>
    {` 
        font-family: 'PT Sans', sans-serif;
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media(max-width: 960px) {
            display: block;

        }
    `}
    </style>
</div>

export default () => <div>
    <Head />
    <Formatter />

    </div>
