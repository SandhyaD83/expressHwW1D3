const React = require('react')

class fiblogic extends React.Component {

    render() {
        const num = this.props.num

        console.log(num)
        const getPerfectSquare = num => {
            let n = 1;

            while (n * n <= num) {
                if (n * n != num) {
                    n++;
                    continue;
                };
                return true;
            };
            return false;
        };

        return (

            < div >
                {getPerfectSquare(5 * num * num + 4) || getPerfectSquare(5 * num * num - 4) ? < h3 > "Very good. It is Fibonacci</h3> : <h3>I can tell this is not a fibonacci number</h3>}
            </div >
        );
    }
}

module.exports = fiblogic;