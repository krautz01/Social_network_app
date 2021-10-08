import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className='dialogs'>
            <div className='dialogs-items'>
                <div className='dialog'>
                    Angela Merkel
                </div>
                <div className='dialog'>
                    Narendra Modi
                </div>
                <div className='dialog'>
                    Emmanuelle Macron
                </div>
                <div className='dialog'>
                    Xin Jin Ping
                </div>
                <div className='dialog'>
                    Joe Biden
                </div>
                <div className='dialog'>
                    Theresa May
                </div>
                <div className='dialog'>
                    Wladimir Putin
                </div>
                <div className='dialog'>
                    Sadyr Zhaparov
                </div>

            </div>
            <div className = 'massages'>
                <div className="massage">Hi!</div>
                <div className="massage">Wie geht's?</div>
                <div className="massage">Es ist so kalt!</div>
            </div>
        </div>
    )
}

export default Dialogs;