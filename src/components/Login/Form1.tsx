import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Form1 (){
    return(
        <div className="bg-[#878787] h-3/4 w-2/5 m-20  p-10 rounded-xl shadow-lg shadow-[#878787]">
            <h1 className='text-3xl text-[#f0f0f0] text-center'>Acesse sua conta</h1>
           
            <form action="" className='flex flex-col mt-5 justify-center'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Seu email"
                    className="mb-2 "
                    
                >
                    <Form.Control  type="email" style={{backgroundColor: '#d4d4d4'}} placeholder="name@example.com" />
                </FloatingLabel>
                    <FloatingLabel  controlId="floatingPassword" label="Password">
                    <Form.Control type="password"  style={{backgroundColor: '#d4d4d4'}} placeholder="Password" />
                </FloatingLabel>
                <Button className='mt-3' style={{backgroundColor: '#00747C', border: 'none'}}>Entrar</Button>
            </form>
           
            <div className='mt-2'>            
                <a href="#" className='text-[#cfcfcf]'>Esqueci a senha</a>
                <p className='text-[#f0f0f0]'>Não tem uma conta? <a href="" className=' text-[#cfcfcf]'>cadastre-se agora</a></p>
            </div>
        </div>
    )
}