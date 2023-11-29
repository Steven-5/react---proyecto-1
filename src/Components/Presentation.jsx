import React        from 'react';
import '../Styles/Presentation.css'

export function Presentation(props){
    return(
        <div className='presentation'>

            <div className='presentation-division-header-body'>

                <div className='presentation-division-header'>
                    <p className='presentation-header-information-worker'><strong>Nombre: </strong> {props.name}</p>
                    <p className='presentation-header-information-worker'><strong>Apellido: </strong>{props.lastName}</p>
                </div>

                <div className='presentation-division-body'>

                    <img className='presentation-body-image' src={require(`../Images/${props.imagePath}`)} />

                    <div className='presentation-body-information'>
                        <p className='presentation-body-information-work'> <strong> Sexo         : </strong> {props.gender}</p>
                        <p className='presentation-body-information-work'> <strong> Nacionalidad : </strong> {props.nationality}</p>
                        <p className='presentation-body-information-work'> <strong> Position     : </strong> {props.position}</p>
                        <p className='presentation-body-information-work'> <strong> Profesion    : </strong> {props.profession}</p>
                        <p className='presentation-body-information-work'> <strong> Descripcion  : </strong> {props.description}</p>
                    </div>

                </div>

            </div>
            
        </div>

    );
}
