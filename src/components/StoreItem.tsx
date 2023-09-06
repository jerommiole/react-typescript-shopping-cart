import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}
export function StoreItem({id, name, price, imgUrl}: 
StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100" style={{
            border: '1px solid grey',
            borderRadius: '0'
        }}>
            <Card.Img src={imgUrl} style={{ borderRadius: '0'}}/>
            <Card.Body className="d-flex flex-column bg-dark text-light">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <h3 className="fs-2">{name}</h3>
                    <span className="ms-2">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)} style={{ 
                            backgroundColor: '#f97a15',
                            borderColor: '#f97a15',
                            color: 'white'
                         }}>
                            + Add To Cart
                        </Button>
                    ):  
                    <div className="d-flex align-items-center flex-column" 
                        style={{ gap: ".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center"
                            style={{ gap: ".5rem"}}>
                            <Button onClick={() => decreaseCartQuantity(id)} style={{ 
                                backgroundColor: '#f97a15',
                                borderColor: '#f97a15',
                                color: 'white'
                             }}>
                                -
                            </Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)} style={{ 
                                backgroundColor: '#f97a15',
                                borderColor: '#f97a15',
                                color: 'white'
                             }}>
                                +
                            </Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)} className="mt-2">Remove</Button>
                    </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
    
}