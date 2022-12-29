//components
import ExpenseItem from './components/ExpenseItem';

function App() {
    const expenses = [
        {
            title: 'Grajdanska otgovornost',
            amount: 294.67,
            date: new Date(2022, 12, 17),
        },
        {
            title: 'Vinetka',
            amount: 97.0,
            date: new Date(2022, 12, 17),
        },
        {
            title: 'Techicneski pregled',
            amount: 50.0,
            date: new Date(2022, 12, 17),
        },
    ];
    return (
        <div>
            <h2>Let's get started!</h2>
            {expenses.map((item) => {
                return (
                    <ExpenseItem
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    ></ExpenseItem>
                );
            })}
        </div>
    );
}

export default App;
