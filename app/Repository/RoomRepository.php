<?php
namespace App\Repository;

use Illuminate\Http\Request;
use App\Room;

class RoomRepository
{
    private $model;


    public function __construct(Room $model)
    {
        $this->model = $model;
    }

    /**
     * @inheritDoc
     */
    public function index()
    {
        $rooms = $this->model::all();
        return $rooms;
    }


    /**
     * @inheritDoc
     */
    public function create(Request $request)
    {
        // TODO: Implement create() method.
    }

    /**
     * @inheritDoc
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $room = $this->model::_create($data);
        return $room;
    }

    /**
     * @inheritDoc
     */
    public function show($id)
    {
        $room = $this->model::find($id);
        return $room;
    }

    /**
     * @inheritDoc
     */
    public function edit($id)
    {
        // TODO: Implement edit() method.
    }

    /**
     * @inheritDoc
     */
    public function destroy($id)
    {
        $room = $this->model::_where($id);
        if($room){
            $room->delete();
            return true;
        }else{
            return  false;
        }
    }

    /**
     * @inheritDoc
     */
    public function update(Request $request, $id)
    {
        $room = $this->model::_where($id);

        if($room){
            $room->_update($request);
            return $room;
        }else{
            return response()->json(['status' => 'error','message'=> 'room not found'],404);
        }
    }

}
