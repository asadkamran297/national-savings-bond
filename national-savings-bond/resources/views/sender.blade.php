<form action="{{ url('/sender') }}" method="post">
    @csrf
    <input type="text" name="name">
    <input type="submit">
</form>