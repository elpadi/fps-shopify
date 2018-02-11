<main id="cart-main" class="template-main single-column">
	<h1>Your Cart</h1>
	<form id="cart-update-form" action="/cart" method="POST" novalidate>
		<table>
			<thead>
				<tr>
					<th colspan="2">&nbsp;</th>
					<th>Quantity</th>
					<th>Price</th>
					<th>&nbsp;</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><img src="/img/shopify/IMG_7107_medium.jpg?v=1510769812" alt=""></td>
					<td><a href="product.php">Blue Boats Dinner Placemats</a><br>$50.00</td>
					<td><input class="cart__quantity-selector" name="updates[]" id="updates_205984235523" value="1" min="0" type="number"></td>
					<td>$50.00</td>
					<td>Remove</td>
				</tr>
				<tr>
					<td><img src="/img/shopify/IMG_7107_medium.jpg?v=1510769812" alt=""></td>
					<td><a href="product.php">Blue Boats Dinner Placemats</a><br>$50.00</td>
					<td><input class="cart__quantity-selector" name="updates[]" id="updates_205984235523" value="1" min="0" type="number"></td>
					<td>$50.00</td>
					<td>Remove</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<th colspan="3">&nbsp;</th>
					<th>$50.00</th>
					<th>&nbsp;</th>
				</tr>
			</tfoot>
		</table>
		<section>
			<div>
				<label for="CartSpecialInstructions">Add special instructions for your order ...</label>
				<textarea name="note" class="input-full" id="CartSpecialInstructions"></textarea>
			</div>
			<div>
				<input name="update" class="btn" value="Update Cart" type="submit">
				<input name="checkout" class="btn" value="Check Out" type="submit">
			</div>
		</section>
	</form>
</main>
